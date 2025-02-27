
import { useSelector } from "react-redux";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Skills from "./Skills";
import Contact from "./Contact";
import Publications from "./Publications";
import Experience from "./Experience";

export default function Main() {

    const isDark = useSelector((state:any) => state.navbar.isDark);

    return(
        <div>
            <div className={`absolute z-0 w-full h-fit top-0 pt-[80px] ${isDark?"bg-black":"bg-white"}`} id="#home">
                <Home/>
                <About/>
                <Projects/>
                <Publications/>
                <Achievements/>
                <Skills/>
                <Experience/>
                <Contact/>
            </div>
        </div>
    );
}