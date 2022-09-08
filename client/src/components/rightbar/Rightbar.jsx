import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const {user: currentUser, dispatch} = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));

    useEffect(() => {
        const getFriends = async () => {
          try {
            const friendList = await axios.get("/users/friends/" + user._id);
            setFriends(friendList.data);
          } catch (err) {
            console.log(err);
          }
          
        };
        getFriends();
      }, [user]);


    const handleClick = async () => {
        try{
            if(followed){
                await axios.put("/users/" + user._id + "/unfollow", {
                    userId: currentUser._id
                });
                dispatch({type: "UNFOLLOW", payload: user._id});
            }else{
                await axios.put("/users/" + user._id + "/follow", {
                    userId: currentUser._id
                });
                dispatch({type: "FOLLOW", payload: user._id})
            }
        }catch(err){
            console.log(err);
        }
        setFollowed(!followed)
    };

    const HomeRightBar = () => {
        return(
            <>
            <span className="rightbarTitle">Вакансии дня</span>
            <hr className="rightbarHr" />
                <div className="rightbarTop">
                    <ul className="rightbarList">
                        <li className="rightbarListItem">
                            <span className="rightbarVacancy">Junior PHP Developer</span>
                            <span className="rightbarSalary">400-1000 USD</span>
                            <span className="rightbarCompany">ООО Иксобит</span>
                            <span className="rightbarCity">Бишкек</span>
                            <span className="rightbarDesc">Необходимые навыки: Понимание принципов работы web–приложений. Знание основ PHP, JavaScript, SQL. Английский на уровне чтения документации и написания комментариев.</span>
                            <div className="rightbarButton">
                                <button className="respondButton">Откликнуться</button>
                                <button className="contactButton">Контакты</button>
                            </div>
                        </li>
                        <li className="rightbarListItem">
                            <span className="rightbarVacancy">Junior PHP Developer</span>
                            <span className="rightbarSalary">400-1000 USD</span>
                            <span className="rightbarCompany">ООО Иксобит</span>
                            <span className="rightbarCity">Бишкек</span>
                            <span className="rightbarDesc">Необходимые навыки: Понимание принципов работы web–приложений. Знание основ PHP, JavaScript, SQL. Английский на уровне чтения документации и написания комментариев.</span>
                            <div className="rightbarButton">
                                <button className="respondButton">Откликнуться</button>
                                <button className="contactButton">Контакты</button>
                            </div>
                        </li>
                        <li className="rightbarListItem">
                            <span className="rightbarVacancy">Junior PHP Developer</span>
                            <span className="rightbarSalary">400-1000 USD</span>
                            <span className="rightbarCompany">ООО Иксобит</span>
                            <span className="rightbarCity">Бишкек</span>
                            <span className="rightbarDesc">Необходимые навыки: Понимание принципов работы web–приложений. Знание основ PHP, JavaScript, SQL. Английский на уровне чтения документации и написания комментариев.</span>
                            <div className="rightbarButton">
                                <button className="respondButton">Откликнуться</button>
                                <button className="contactButton">Контакты</button>
                            </div>
                        </li>
                        <li className="rightbarListItem">
                            <span className="rightbarVacancy">Junior PHP Developer</span>
                            <span className="rightbarSalary">400-1000 USD</span>
                            <span className="rightbarCompany">ООО Иксобит</span>
                            <span className="rightbarCity">Бишкек</span>
                            <span className="rightbarDesc">Необходимые навыки: Понимание принципов работы web–приложений. Знание основ PHP, JavaScript, SQL. Английский на уровне чтения документации и написания комментариев.</span>
                            <div className="rightbarButton">
                                <button className="respondButton">Откликнуться</button>
                                <button className="contactButton">Контакты</button>
                            </div>
                        </li>
                        <li className="rightbarListItem">
                            <span className="rightbarVacancy">Junior PHP Developer</span>
                            <span className="rightbarSalary">400-1000 USD</span>
                            <span className="rightbarCompany">ООО Иксобит</span>
                            <span className="rightbarCity">Бишкек</span>
                            <span className="rightbarDesc">Необходимые навыки: Понимание принципов работы web–приложений. Знание основ PHP, JavaScript, SQL. Английский на уровне чтения документации и написания комментариев.</span>
                            <div className="rightbarButton">
                                <button className="respondButton">Откликнуться</button>
                                <button className="contactButton">Контакты</button>
                            </div>
                        </li>
                        <li className="rightbarListItem">
                            <span className="rightbarVacancy">Junior PHP Developer</span>
                            <span className="rightbarSalary">400-1000 USD</span>
                            <span className="rightbarCompany">ООО Иксобит</span>
                            <span className="rightbarCity">Бишкек</span>
                            <span className="rightbarDesc">Необходимые навыки: Понимание принципов работы web–приложений. Знание основ PHP, JavaScript, SQL. Английский на уровне чтения документации и написания комментариев.</span>
                            <div className="rightbarButton">
                                <button className="respondButton">Откликнуться</button>
                                <button className="contactButton">Контакты</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        );
    };

    const ProfileRightBar = () => {
        return(
            <>
            {user.username !== currentUser.username && (
                <button className="rightbarFollowButton" onClick={handleClick}>
                    {followed ? "Отписаться" : "Подписаться"}
                    {followed ? <Remove/> : <Add/>}
                </button>
            )}
            <div className="profileRightbarInfoTop">
            <h4 className="profileRightbarTitle">Информация о пользователе</h4>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Город:</span>
                   <ul className="rightbarCity">
                       <li className="rightbarInfoValue">Бишкек</li>
                   </ul>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Возраст:</span>
                   <ul className="rightbarAge">
                       <li className="rightbarInfoValue">22 года</li>
                   </ul>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Образование:</span>
                   <ul className="rightbarEducation">
                       <li className="rightbarInfoValue">Высшая IT-Школа КГЮА</li>
                   </ul>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Опыт работы:</span>
                   <ul className="rightbarWork">
                       <li className="rightbarInfoValue">Spectr Design</li>
                   </ul>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Навыки:</span>
                   <ul className="rightbarInfoSkills">
                       <li className="rightbarInfoValue">Создание сайтов с нуля</li>
                       <li className="rightbarInfoValue">Разработка структуры сайта</li>
                       <li className="rightbarInfoValue">Разработка дизайн-макетов</li>
                   </ul>
               </div>
               <div className="rightbarInfoItem">
                   <span className="rightbarInfoKey">Курсы:</span>
                   <ul className="rightbarInfoCorses">
                       <li className="rightbarInfoValue">React JS</li>
                       <li className="rightbarInfoValue">Java</li>
                       <li className="rightbarInfoValue">PHP</li>
                   </ul>
               </div>
            </div>
            <div className="profileRightbarInfoBottom">
            <h4 className="profileRightbarTitle">О себе</h4>
            <div className="rightbarInfoAboutMe">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi reprehenderit. Fugit error nihil repudiandae perspiciatis inventore asperiores maiores doloremque.
            </div>
            </div>
            <h4 className="profileRightbarTitle followingTitle">Друзья</h4>
            <div className="rightbarFollowings">
          {friends.map((friend) => (
              <Link 
                to={"/profile/" + friend.username}
                style={{textDecoration: "none", color: "white"}}
              >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "people/no-avatar.jpg"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
              </Link>
          ))}
        </div>
      </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar/> : <HomeRightBar />}
            </div>
        </div>
    )
}