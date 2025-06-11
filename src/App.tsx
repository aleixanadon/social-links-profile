import './App.css'
import SocialProfile from './components/SocialProfile/SocialProfile'
import Avatar from './assets/avatar-jessica.jpeg'

function App() {
  return (
    <>
      <SocialProfile 
        src={Avatar}
        name='Jessica Randall'
        location='London, United Kingdom'
        description='Front-end developer and avid reader.'
        links={
          [
            {
              text: "GitHub",
              href: ""
            },
            {
              text: "Frontend Mentor",
              href: ""
            },
            {
              text: "LinkedIn",
              href: ""
            },
            {
              text: "Twitter",
              href: ""
            },
            {
              text: "Instagram",
              href: ""
            }
          ]
        }
      />
    </>
  )
}

export default App
