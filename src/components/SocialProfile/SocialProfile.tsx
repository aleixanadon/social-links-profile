import type { ISocialProfile } from "../../interfaces/ISocialProfile";
import './SocialProfile.css'

const SocialProfile: React.FC<ISocialProfile> = ({
  src,
  name,
  location,
  description,
  links,
}) => {
  return (
    <div className="card">
      <img className="photo" src={src} alt="" />
      <div className="name-location">
        <div className="name">{name}</div>
        <div className="location">{location}</div>
      </div>
      <div className="description">{description}</div>
      <div className="tree">
        {links &&
          links.map((link, index) => (
            <div className="link-box">
              <a className="anchor" key={index}>{link.text}</a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SocialProfile;
