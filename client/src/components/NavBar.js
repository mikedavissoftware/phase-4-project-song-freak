import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"


export default function NavBar({user, setUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <>
    <Menu pointing horizontal style={{width: "350px", margin: "auto", textAlign: "center"}}>
      <Menu.Item className="banger"> 
        <NavLink exact to="/users">
          Users
        </NavLink>
      </Menu.Item>  

      <Menu.Item className="banger">
        <NavLink to="/songs">
          Songs
        </NavLink>
      </Menu.Item>

      <Menu.Item className="banger">
        <NavLink to="/songs/new">
          Gamers
        </NavLink>
      </Menu.Item>

      {/* {user ? (
        <Menu.Item className="banger">
          <NavLink to="/me">
            Account
          </NavLink>
        </Menu.Item>
      ) : (
        <Menu.Item className="banger">
            No Account
        </Menu.Item>
      )} */}
    </Menu>

    {/* <button onClick = {handleLogoutClick}>
      Log Out
    </button> */}
    </>
  )
}