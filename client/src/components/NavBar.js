import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"


export default function NavBar({currentUser, setCurrentUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
      }
    });
  }

  console.log(currentUser)

  return (
    <>
    <Menu pointing horizontal style={{width: "335px", margin: "auto", textAlign: "center"}}>
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
          Add Song!
        </NavLink>
      </Menu.Item>

      {currentUser ? (
        <Menu.Item className="banger">
          <NavLink to="/me">
            Account
          </NavLink>
        </Menu.Item>
      ) : (
        <Menu.Item className="banger">
            No Account
        </Menu.Item>
      )}
    </Menu>

    <button onClick = {handleLogoutClick}>
      Log Out
    </button>
    </>
  )
}