import type { LocationTextProps } from "../../interfaces/LocationTextProps"
import './LocationText.css'

const LocationText: React.FC<LocationTextProps> = ({ location }) => {
  return (
    <div className="location-text">{location}</div>
  )
}

export default LocationText