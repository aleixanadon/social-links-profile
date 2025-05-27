import './App.css'
import SocialLinkProfile from './components/SocialLinkProfile/SocialLinkProfile'
import type { SocialLinkProfileProps } from './interfaces/SocialLinkProfileProps'
import Avatar from './assets/avatar-jessica.jpeg'

function App() {

  const socialLinkProfileMock: SocialLinkProfileProps = {
    src: Avatar,
    name: "Jessica Randall",
    location: "London, United Kingdom",
    description: "Front-end developer and avid reader.",
    links: ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]
  }

  return (
    <>
      <SocialLinkProfile 
        src={socialLinkProfileMock.src}
        name={socialLinkProfileMock.name}
        location={socialLinkProfileMock.location}
        description={socialLinkProfileMock.description}
        links={socialLinkProfileMock.links}
      />
    </>
  )
}

export default App
