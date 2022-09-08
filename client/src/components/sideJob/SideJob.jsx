import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";


export default function SideJob() {
    return(
        <>
        <Topbar />
        <div className="work">
            <Sidebar />
            <div className="workWrapper">
                <h1 className="workTitle">На сайте 24 вакансии</h1>
                <div className="workButton">
                <Link to="/distant">
                    <button className="btnRemote workLinkButton">Удаленная работа</button>
                    </Link>
                    
                    <button className="btnSideJob workLinkButton">Подработка</button>
                    <Link to="/noexp">
                     <button className="btnNoExp workLinkButton">Нет опыта</button>
                    </Link>
                </div>
        <div className="workCards">
                    <div className="workCard">
                        <div className="workCardTop">
                            <div className="workCardLeft">
                               <h3  className="workCardTitle">Frontend Developer</h3>
                               <div className="workCardType">Подработка</div>
                            </div>
                        </div>
                        <h4 className="workCardCompany">Farzoom</h4>
                        <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cum sit non debitis dignissimos voluptatem architecto nisi facere voluptatum consequuntur.</span>
                        <div className="vacanciesButton">
                            <button className="workBtn">Откликнуться</button>
                            <button className="workBtnContact">Контакты</button>
                        </div>
                    </div>

                    <div className="workCard">
                        <div className="workCardTop">
                            <div className="workCardLeft">
                               <h3 className="workCardTitle">3D-дизайнер / 3D-моделлер</h3>
                               <div className="workCardType">Подработка</div>
                            </div>
                        </div>
                        <h4 className="workCardCompany">Окси Тим</h4>
                        <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cum sit non debitis dignissimos voluptatem architecto nisi facere voluptatum consequuntur.</span>
                        <div className="vacanciesButton">
                            <button className="workBtn">Откликнуться</button>
                            <button className="workBtnContact">Контакты</button>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        </>
    )
}