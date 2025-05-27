import type { RoundedImageProps } from "../../interfaces/RoundedImageProps";
import './RoundedImage.css'

const RoundedImage: React.FC<RoundedImageProps> = ({ src }) => {
  return <img src={src} alt="Social media photo" className="rounded-image"/>
};

export default RoundedImage;
