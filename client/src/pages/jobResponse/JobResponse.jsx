import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./jobResponse.css";


export default function jobResponse() {
    return(
        <>
        <Topbar />
        <div className="jobresponse">
            <Sidebar />
            <div className="jobresponseWrapper">
                <div className="jobresponseCards">
                    <div className="jobresponseCard">
                        <div className="jobresponseTop">
                            <div className="jobresponseTopLeft">
                                <h3 className="jobresponseTitle">Frontend Developer</h3>
                            </div>
                            <div className="jobresponseRight">
                                <div className="jobresponseType">Нет опыта</div>
                            </div>
                        </div>
                        <h4 className="jobresponseCompany">Vertex Technologies</h4>
                        <span className="jobresponseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus. Fugiat error repellat in, quo aliquid iste aperiam maiores distinctio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores sequi aliquid tenetur maiores voluptatem similique perferendis! Dolorum sed voluptatem at.</span>
                    </div>
                    
                    <div className="jobresponseCard">
                        <div className="jobresponseTop">
                            <div className="jobresponseTopLeft">
                                <h3 className="jobresponseTitle">Junior С# (ASP.NET/Xamarin) Developer</h3>
                            </div>
                            <div className="jobresponseRight">
                                <div className="jobresponseType">Удаленная работа</div>
                            </div>
                        </div>
                        <h4 className="jobresponseCompany">Иксобит</h4>
                        <span className="jobresponseDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus. Fugiat error repellat in, quo aliquid iste aperiam maiores distinctio! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores sequi aliquid tenetur maiores voluptatem similique perferendis! Dolorum sed voluptatem at.</span>
                    </div>

                    
                </div>
            </div>
            <Rightbar />
        </div>
        
        </>
    )
}