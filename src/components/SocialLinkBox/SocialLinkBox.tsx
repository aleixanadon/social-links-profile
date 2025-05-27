import type { SocialLinkBoxProps } from "../../interfaces/SocialLinkBoxProps"
import './SocialLinkBox.css'

const SocialLinkBox: React.FC<SocialLinkBoxProps> = ({ text }) => {
  return (
    <div className="social-link-box">{text}</div>
  )
}

export default SocialLinkBox