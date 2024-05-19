const Title = ({ headign, subHeading }) => {
  return (
  <div className="my-4 text-center w-2/5 mx-auto">
    <p className="py-2 text-[#D99904] text-xl italic">---{subHeading}---</p>
    <h1 className="text-3xl font-semibold border-y-2 py-5 uppercase">{headign}</h1>
  </div>
  );
};

export default Title;
