import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            console.log(newPost);
            try {
              await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
          }
        try{
           await axios.post("/posts", newPost);
           window.location.reload()
        } catch (err) {}
    };

    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img 
                        className="shareProfileImg" 
                        src={
                            user.profilePicture
                                ? PF + user.profilePicture
                                : PF + "people/no-avatar.jpg"
                            } 
                            alt="" 
                        />
                    <input 
                        placeholder={"Загрузи свои работы, " + user.username }
                        className="shareInput" 
                        ref={desc}
                    />
                </div>
                <hr className="shareHr"/>
                {file && (
                 <div className="shareImgContainer">
                    <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                    <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                 </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Фото</span>
                            <input style={{display: "none"}} type="file" id="file" accept=".png, .jpg, .jpeg" onChange={(e) => setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="green"  className="shareIcon" />
                            <span className="shareOptionText">Ссылка</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="blue"  className="shareIcon" />
                            <span className="shareOptionText">Локация</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="gold"  className="shareIcon" />
                            <span className="shareOptionText">Смайлик</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Отправить</button>
                </form>
            </div>
        </div>   
    )
}