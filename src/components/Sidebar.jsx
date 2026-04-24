import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../features/user/userSlice.js";

function Sidebar() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/", { replace: true });
  };

  const getNavClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <strong>{username || "Guest"}</strong>
      </div>

      <nav>
        <ul className="sidebar-nav">
          <li>
            <NavLink to="/products" className={getNavClass}>
              Product List
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={getNavClass}>
              Profile Page
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
