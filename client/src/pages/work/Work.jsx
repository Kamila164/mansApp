import "./work.css";
import SideBar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/Topbar";
import Vacancies from "../../components/vacancies/Vacancies";
import { Link } from "react-router-dom";


export default function Work() {
    return(
        <>
        <TopBar />
        <div className="work">
            <SideBar />
            <div className="workWrapper">
                <h1 className="workTitle">На сайте 24 вакансии</h1>
                <div className="workButton">
                    <Link to="/distant">
                    <button className="btnRemote workLinkButton">Удаленная работа</button>
                    </Link>
                    <Link to="/sidejob">
                    <button className="btnSideJob workLinkButton">Подработка</button>
                    </Link>
                    <Link to="/noexp">
                     <button className="btnNoExp workLinkButton">Нет опыта</button>
                    </Link>
                </div>
                <Vacancies />
            </div>
        </div>
        </>
    )
}