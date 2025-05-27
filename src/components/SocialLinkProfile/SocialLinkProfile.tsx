import type { SocialLinkProfileProps } from "../../interfaces/SocialLinkProfileProps";
import LocationText from "../LocationText/LocationText";
import RoundedImage from "../RoundedImage/RoundedImage";
import SocialDescription from "../SocialDescription/SocialDescription";
import SocialLinkBox from "../SocialLinkBox/SocialLinkBox";
import SocialName from "../SocialName/SocialName";
import "./SocialLinkProfile.css";

const SocialLinkProfile: React.FC<SocialLinkProfileProps> = ({
  src,
  name,
  location,
  description,
  links,
}) => {
  return (
    <article className="social-link-profile">
      <RoundedImage src={src} />
      <div className="name-location-div">
        <SocialName name={name} />
        <LocationText location={location} />
      </div>
      <SocialDescription description={description} />
      <div className="social-links-list">
        {links.map((link) => (
          <SocialLinkBox text={link} key={link} />
        ))}
      </div>
    </article>
  );
};

export default SocialLinkProfile;
