import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
      },[state.user])

    return (
        <AuthContext.Provider 
        value={{ 
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

/**_id: "628361e3771010377b329867",
        username: "Kamila",
        email: "kamila@gmail.com",
        profilePicture: "people/6.jpg",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin:false */