import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"


export default function NavBar() {
  return (
    <Menu pointing horizontal style={{width: "265px", margin: "auto", textAlign: "center"}}>
      <Menu.Item className="banger"> 
        <NavLink exact to="/users">
          Users
        </NavLink>
      </Menu.Item>  

      <Menu.Item className="banger">
        <NavLink to="/games">
          Songs
        </NavLink>
      </Menu.Item>

      <Menu.Item className="banger">
        <NavLink to="/gamers">
          Gamers
        </NavLink>
      </Menu.Item>

      <Menu.Item className="banger">
        <NavLink to="/reviews">
          Reviews
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}