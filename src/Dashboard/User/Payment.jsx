import { loadStripe } from '@stripe/stripe-js';
import Title from '../../Component/Title';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div>
            <Title heading="Payment" />
                <div>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                </div>
        </div>
    );
};

export default Payment;