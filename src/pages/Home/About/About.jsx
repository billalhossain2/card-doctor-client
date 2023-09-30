import personImg from "../../../assets/images/about_us/person.jpg";
import partsImg from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-10 mb-32 px-3">
        <div className="md:w-5/6 w-full md:h-auto relative lg:block flex flex-col items-center">
        <img className="md:w-[450px] h-[350px] w-full" src={personImg} alt="Person Image" />
        <img className="md:w-[250px] md:h-[250px] h-[200px] w-[80%] absolute md:bottom-0 bottom-[-100px] md:right-0 right-100 border-[10px] border-solid border-[#eee7e7] rounded-lg shadow-lg" src={partsImg} alt="Person Image" />
        </div>
        <div className="space-y-5 md:mt-0 mt-32">
        <h3 className="font-bold text-[#FF3811]">About Us</h3>
        <h1 className="md:text-5xl text-3xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md font-bold">Get More Info</button>
        </div>
    </div>
  )
}

export default About