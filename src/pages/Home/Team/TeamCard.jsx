import memberImg from "../../../assets/images/team/team1.jpg"
import { BsFacebook } from 'react-icons/bs';
const TeamCard = ({member}) => {
    const {image, name, expertise, social_icons} = member || {};
    const {facebook, twitter, linkedin, instagram} = social_icons || {};
  return (
    <div className="text-center space-y-3 rounded-lg">
        <img className="rounded-lg" src={image} alt="Team Member" />
        <div>
            <h3 className="text-3xl font-bold mb-3">{name}</h3>
            <p className="text-[#737373]">{expertise}</p>
            <div className="flex gap-3 justify-center mt-3">
                <img src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={linkedin} alt="Linkedin" />
                <img src={instagram} alt="Instagram" />
            </div>
        </div>
    </div>
  )
}

export default TeamCard