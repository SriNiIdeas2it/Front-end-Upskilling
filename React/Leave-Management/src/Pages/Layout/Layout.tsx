import { Outlet } from "react-router-dom"
import SideBar from "../../Components/sidebar/SideBar"
import NavBar from "../../Components/navBar/NavBar"
import  "./Layout.css"

const Layout = () => {
  return (
   <div className="layout">
    <SideBar />
    <div className="main-content">
    <NavBar />
    <Outlet />
    </div>
    </div>
  )
}

export default Layout
