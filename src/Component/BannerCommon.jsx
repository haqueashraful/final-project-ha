
const BannerCommon = ({bg, title, subTitle}) => {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "600px"}} className=" p-28 ">
            <div className="bg-black/70 w-full h-full flex flex-col justify-center items-center gap-3">
                <h1 className="text-5xl text-white font-semibold uppercase tracking-widest">{title}</h1>
                <p className="text-lg text-white">{subTitle}</p>
            </div>
        </div>
    );
};

export default BannerCommon;