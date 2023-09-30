import "./Footer.css"
import logo from "../../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#151515] text-white pb-20 pt-20 mb-5">
    <aside>
      <p><img src={logo} alt="Logo Image" /></p>
      <p className="text-[#E8E8E8]">Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
    </aside> 
    <nav>
      <header className="text-[#fff] font-bold text-[20px] mb-5">About</header> 
      <a className="link link-hover">Home</a> 
      <a className="link link-hover">Services</a> 
      <a className="link link-hover">Contact</a> 
    </nav> 
    <nav>
      <header className="text-[#fff] font-bold text-[20px] mb-5">Company</header> 
      <a className="link link-hover">Why Car Doctor</a> 
      <a className="link link-hover">About</a> 
    </nav> 
    <nav>
      <header className="text-[#fff] font-bold text-[20px] mb-5">Support</header> 
      <a className="link link-hover">Support Center</a> 
      <a className="link link-hover">Facebook</a> 
      <a className="link link-hover">Accessibility</a>
    </nav>
  </footer>
  )
}

export default Footer