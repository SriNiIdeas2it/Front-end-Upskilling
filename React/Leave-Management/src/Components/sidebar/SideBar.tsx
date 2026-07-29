import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="sidebar-header">
        <i
          className="fa-solid fa-users"
          style={{ color: "#2563eb" }}
        ></i>
        <span>Leave Management</span>
      </div>

      <div className="sidebar-menu">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/usercreation"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-user-pen"></i>
          <span>User Creation</span>
        </NavLink>

        <NavLink
          to="/leaverequest"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-book"></i>
          <span>Leave Request</span>
        </NavLink>

        <NavLink
          to="/leaveapproval"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-file-signature"></i>
          <span>Leave Approval</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;