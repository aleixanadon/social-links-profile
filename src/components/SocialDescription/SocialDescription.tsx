import type { SocialDescriptionProps } from "../../interfaces/SocialDescriptionProps"
import './SocialDescription.css'

const SocialDescription: React.FC<SocialDescriptionProps> = ({ description }) => {
  return (
    <div className="social-description">"{description}"</div>
  )
}

export default SocialDescription