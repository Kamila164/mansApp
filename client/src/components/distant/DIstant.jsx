import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import "./distant.css";


export default function Distant() {
    return(
        <>
        <Topbar />
        <div className="work">
            <Sidebar />
            <div className="workWrapper">
                <h1 className="workTitle">На сайте 24 вакансии</h1>
                <div className="workButton">
                    <button className="btnRemote workLinkButton">Удаленная работа</button>
                    
                    <Link to="/sidejob">
                    <button className="btnSideJob workLinkButton">Подработка</button>
                    </Link>
                    <Link to="/noexp">
                     <button className="btnNoExp workLinkButton">Нет опыта</button>
                    </Link>
                </div>
        <div className="workCards">
                    <div className="workCard">
                        <div className="workCardTop">
                            <div className="workCardLeft">
                               <h3  className="workCardTitle">Backend Developer</h3>
                               <div className="workCardType">Удаленная работа</div>
                            </div>
                        </div>
                        <h4 className="workCardCompany">Vertex Technologies</h4>
                        <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cum sit non debitis dignissimos voluptatem architecto nisi facere voluptatum consequuntur.</span>
                        <div className="vacanciesButton">
                            <button className="workBtn">Откликнуться</button>
                            <button className="workBtnContact">Контакты</button>
                        </div>
                    </div>

                    <div className="workCard">
                        <div className="workCardTop">
                            <div className="workCardLeft">
                               <h3 className="workCardTitle">Junior С# (ASP.NET/Xamarin) Developer</h3>
                               <div className="workCardType">Удаленная работа</div>
                            </div>
                        </div>
                        <h4 className="workCardCompany">Иксобит</h4>
                        <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cum sit non debitis dignissimos voluptatem architecto nisi facere voluptatum consequuntur.</span>
                        <div className="vacanciesButton">
                            <button className="workBtn">Откликнуться</button>
                            <button className="workBtnContact">Контакты</button>
                        </div>
                    </div>

                    <div className="workCard">
                        <div className="workCardTop">
                            <div className="workCardLeft">
                               <h3 className="workCardTitle">Программист-разработчик (Junior Ruby on Rails Developer)</h3>
                               <div className="workCardType">Удаленная работа</div>
                            </div>
                        </div>
                        <h4 className="workCardCompany">Vertex Technologies</h4>
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