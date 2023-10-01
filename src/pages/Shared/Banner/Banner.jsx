import bannerImg from "../../../assets/images/banner/slider3.jpg"
const Banner = ({bannerInfo}) => {
  const {title, path} = bannerInfo;
  return (
    <div className="h-96 rounded-lg mb-20 relative flex flex-col justify-center items-center" style={{backgroundImage: 'url(https://i.ibb.co/1Gpzfv1/slider4.jpg)', backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>
    <div className="bg-[#1d1c1cb2] w-full h-full rounded-lg flex flex-col justify-center">
        <h1 className="md:text-5xl text-3xl text-white font-bold md:ml-20 ml-3">{title}</h1>
    </div>
    <div className="bg-[#FF3811] text-white font-bold w-60 text-center absolute bottom-0 py-5 rounded-t-full">{path}</div>
  </div>
  )
}

export default Banner