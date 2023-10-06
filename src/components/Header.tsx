import { IconButton } from "@material-ui/core";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./image/images.jpeg";
import { selectSendonlogin, statusonlogout } from "../onLoginSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const status = useSelector(selectSendonlogin);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-left">
        <img data-testid="logo" src={logo} alt="Site" width={80} height={50} />

        <h2 className="font-monospace">SHOPPIFY</h2>
      </div>

      <div>
        {status && (
          <div className="header-right">
            <ul>
              <li>
                <IconButton>
                  <AccountCircleIcon></AccountCircleIcon>
                </IconButton>
                <Link to="/profile"> Profile</Link>
              </li>

              <li>
                <IconButton>
                  <CategoryIcon></CategoryIcon>
                </IconButton>
                <Link to="/product"> Product</Link>
              </li>
              <li>
                <IconButton>
                  <ShoppingCartIcon></ShoppingCartIcon>
                </IconButton>
                <Link to="/cart"> Cart</Link>
              </li>
              <li>
                <IconButton>
                  <LogoutIcon></LogoutIcon>
                </IconButton>

                <Link
                  to="/"
                  data-testid="logout"
                  onClick={() => dispatch(statusonlogout())}
                >
                  {" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
