import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Work from "./pages/work/Work";
import JobResponse from "./pages/jobResponse/JobResponse";
import Distant from "./components/distant/DIstant";
import SideJob from "./components/sideJob/SideJob";
import NoExp from "./components/noExp/NoExp";


function App() {
  const {user} = useContext(AuthContext);

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ user ? <Home /> : <Register /> } />
        <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/work" element={<Work />} />
        <Route path="/jobresponse" element={ <JobResponse /> } />
        <Route path="/distant" element={ <Distant /> } />
        <Route path="/sidejob" element={ <SideJob /> } />
        <Route path="/noexp" element={ <NoExp /> } />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


/*
<BrowserRouter>
    <Routes>
        <Route path="/" element={ user ? <Register /> : <Home /> } />
        <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
    </Routes>
    </BrowserRouter>
*/