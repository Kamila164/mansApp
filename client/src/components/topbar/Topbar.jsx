import "./topbar.css";
import {Search, Person, Chat, Notifications, ExitToApp} from "@mui/icons-material";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const logoutHandler =  () => {
        localStorage.clear();
        window.location.reload();
      };

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <div className="logo">mans<span>App</span></div>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Поиск" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="topbarExit">
                        <button className="buttonExit" onClick={logoutHandler}><ExitToApp className="topbarExitIcon"/></button>
                </div>
                <Link to={`/profile/${user.username}`}>
                <img 
                    src={user.profilePicture 
                        ? PF + user.profilePicture 
                        : PF + "people/no-avatar.jpg"} 
                    alt="" 
                    className="topbarImg" 
                />
                </Link>
            </div>
        </div>
    )
}