import "./sidebar.css";
import { RssFeed, WorkOutline, School, Chat } from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Новости</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Чат</span>
                    </li>
                    <Link to='/work' style={{textDecoration: "none", color: "white"}}>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Вакансии</span>
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Курсы</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                <div className="myEvents">
                    <h1 className="myEventsTitle">Мои события</h1>
                    <ul className="myEventsList">
                        <Link to="/jobresponse" style={{textDecoration: "none", color: "white"}}>
                        <li className="myEventsListItem">
                            Отклики
                            <span className="counterEvents">4</span>
                        </li>
                        </Link>
                        <li className="myEventsListItem">
                            Приглашения
                            <span className="counterEvents">1</span>
                        </li>
                        <li className="myEventsListItem">
                            Избранные вакансии
                            <span className="counterEvents">2</span>
                        </li>
                    </ul>
                </div>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}