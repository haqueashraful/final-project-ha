import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";

const PaymentForm = () => {
    const {user} = useAuth();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price: total}).then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    }, [axiosSecure, total]);

  const handlePayment = async (event) => {
    event.preventDefault();

    if(!stripe || !elements) {
        return;
    }

    const card = elements.getElement(CardElement);
    if(card === null) {
        return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    });

    if(error) {
        console.log(error);
        setError(error.message);
    } else {
        console.log(paymentMethod);
        setError('');
    }

    // confirm payment
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName
            },
          },
        },
      );
      if(intentError) {
        console.log(intentError);
      }
       else {
        console.log(paymentIntent);

        // save payment information to the server

        if(paymentIntent.status === 'succeeded') {

            const payment ={
                email: user?.email,
                transactionId: paymentIntent.id,
                price: total,
                date: new Date(),
                cartIds: cart.map(item => item._id),
                menuItemIds: cart.map(item => item.menuItemId),
                status: 'pending'
            }

            
           const result = await axiosSecure.post('/payments', payment)

           console.log(result.data)
        }
      }
  };
  return (
    <div>
      <form onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-500">{error}</p>
        <button type="submit" disabled={!stripe || !clientSecret} className='border-b-4 text-[#BB8506] border-[#BB8506] rounded-md px-5 py-2 hover:bg-black font-semibold'>
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
