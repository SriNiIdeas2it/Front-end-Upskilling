import "../navBar/navBar.css"
const NavBar = () => {
  return (
    <div className="nav-bar h-10">
        <div>
        <i className="fa-solid fa-bars"></i>
        </div>
        <div className="nav-user-details">
        <i className="fa-regular fa-bell"></i>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJ6x6vkn_wiX3SFiVUlfXzE5YGzmguP8kyCiGLqKNIRitsv3vzf=s96-c" />
        <div className="user-profile">
        <span className="bold">Srinivasan</span>
        <span className="small-word">Manager</span>
        </div>
        <i className="fa-solid fa-angle-down"></i>
        </div>
    </div>
  )
}

export default NavBar
