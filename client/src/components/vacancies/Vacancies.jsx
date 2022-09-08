import "./vacancies.css"
import { Data } from "../../data"
import Modal from "../modal/Modal"
import { useState } from "react";


export default function Vacancies() {

    const [modalActive, setModalActive] = useState(true);

    return(
        <div className="vacancies">
            {Data.map(data => (
                    <div key={data.id} className="workCards">
                    <div className="workCard">
                        <div className="workCardTop">
                            <div className="workCardLeft">
                               <h3 key={data.id} className="workCardTitle">{data.title}</h3>
                               <div className="workCardType">{data.type}</div>
                            </div>
                            
                        </div>
                        <h4 className="workCardCompany">{data.companyName}</h4>
                        <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium cum sit non debitis dignissimos voluptatem architecto nisi facere voluptatum consequuntur.</span>
                        <div className="vacanciesButton">
                            <button className="workBtn">Откликнуться</button>
                            <button className="workBtnContact" onClick={() => setModalActive(true)}>Контакты</button>
                        </div>
                        <Modal active={modalActive} setActive={setModalActive}>
                            <div className="vacanciesModal">
                                <div className="vacanciesCompany">
                                    <img src="assets/people/farzoom.jpg" alt="" className="modalImg" />
                                    <span className="modalName">Farzoom</span>
                                </div>
                                <div className="modalInfo">
                                    <div className="modalEmail modalCompanyInfo">
                                        <span className="companyKey">Email:</span>
                                        <span className="companyValue modalKey">farzoom@gmail.com</span>
                                    </div>
                                    <div className="modalPhone modalCompanyInfo">
                                    <span className="companyKey">Телефон:</span>
                                        <span className="companyValue">+996(551)05-19-05</span>
                                    </div>
                                    <div className="modalAdress modalCompanyInfo">
                                        <span className="companyKey">Адрес:</span>
                                        <span className="companyValue modalKey">Проспект Мира 76</span>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
                ))}
        </div>
    )
}