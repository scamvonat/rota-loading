import discordIcon from "../assets/discord.svg";
import XIcon from "../assets/X.svg";
import instagramIcon from "../assets/instagram.svg";
import SocialButton from "./SocialButton";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="hr"></div>
      <div className="social-links">
        <SocialButton icon={discordIcon} to="" />
        <SocialButton icon={instagramIcon} to="" />
        <SocialButton icon={XIcon} to="" />
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default Footer;
