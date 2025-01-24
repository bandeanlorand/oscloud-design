import { NavLink } from "react-router-dom";
// import "./Menu.css"; // Add styling for the menu

const SideMenuWidget = () => {
  return (
    <nav id="menu-widget" className="menu-widget menu">
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}>
           Homepage
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/protected" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Protected Page
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/auth/sign-in" 
            className={({ isActive }) => (isActive ? "active" : "")}>
            Menu item 3
          </NavLink>
        </li>
      </ul>

      <div className="btn-group btn-group-sm position-sticky bottom-0">
                <button type="button" className="btn btn-secondary settings-btn">Settings</button>
                <button type="button" className="btn btn-secondary toggle-menu" id="toggle-btn">
                    <i className="arrow-placeholder"></i> <span className="item-text">Close</span>
                </button>
            </div>
    </nav>
  );
};

export default SideMenuWidget;
