import type { SocialNameProps } from "../../interfaces/SocialNameProps";
import './SocialName.css'

const SocialName: React.FC<SocialNameProps> = ({ name }) => {
  return <div className="social-name">{name}</div>;
};

export default SocialName;
