import { motion } from "framer-motion";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import barsWhite from "../assets/bars-4-white.svg";
import xMarkWhite from "../assets/x-mark-white.svg";
import xMarkBlack from "../assets/x-mark-black.svg";
import barsBlack from "../assets/bars-4-black.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsDark, setIsOpen, setNavState } from "../features/navbar/navbarSlice";
import { useEffect } from "react";

const links = [
    { name: "Home", to: "#home", id: 1 },
    { name: "About", to: "#about", id: 2 },
    { name: "Projects", to: "#projects", id: 3 },
    { name: "Publications", to: "#publications", id: 4},
    { name: "Achievements", to: "#achievements", id: 5 },
    { name: "Skills", to: "#skills", id: 6 },
    { name: "Experience", to: "#experience", id: 7},
    { name: "Contact", to: "#contact", id: 8 },
];

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


export default function Navbar() {

    const isOpen = useSelector((state:any) => state.navbar.isOpen);
    const isDark = useSelector((state:any) => state.navbar.isDark);
    const navState = useSelector((state:any) => state.navbar.navState);
    const dispatch = useDispatch();
    

    const handleIsOpen = (value:boolean) => {
        dispatch(setIsOpen(value));
    };

    const toggleDark = () => {
        dispatch(setIsDark(!isDark));
    };

    const changeNav = (s:string) => {
        dispatch(setNavState(s));
    };

    const handleResize = () => {
        if (window.innerWidth>720) {
            dispatch(setIsOpen(false));
        }
    };
      
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[]);

    return(
        <div className="relative">
            <motion.div 
                initial={false}
                animate={{height: isOpen?'280px':'60px'}}
                transition={{ duration: 0.5, delay: 0, ease: [0, 0.2, 0.2, 0.2] }}
                className="w-full bg-transparent flex fixed top-0 border-b-[1px] border-gray-500 backdrop-blur-sm pt-[10px] z-10"
            >
                <motion.a
                    initial={{ opacity: 0, scale: 0.5, x: -1000 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.8, 1.01] }}
                    className={`pt-[5px] pl-[20px] font-black ${isDark?"text-white":"text-black"} text-[20px] font-poetsen flex gap-1 hover:cursor-pointer group hover:gap-5`}
                    href="#home"
                >
                    <p>VIPUL CHAUHAN</p>
                </motion.a>
                <div className="hidden lg:block">
                    <div className="flex absolute right-[10px]">
                        <motion.div 
                            className="mt-[5px]"
                            initial={{ opacity: 0, scale: 0.5, x: 1000 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <div className={`border-[1px] border-black w-[52px] h-[30px] rounded-full ${isDark?"bg-blue-500":"bg-yellow-400"}`} onClick={toggleDark}>
                                {(!isDark)?(
                                    <img className="w-[28px] h-[28px] bg-white rounded-full" src={sun}/>
                                ):
                                (
                                    <img className="w-[28px] h-[28px] ml-[20px] bg-white rounded-full" src={moon}/>
                                )}
                            </div>
                        </motion.div>
                        {links.map((item,key) => 
                            <motion.a 
                                initial={{ opacity: 0, scale: 0.5, x: 1000 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 1, delay: 1+key/10, ease: [0, 0.71, 0.2, 1.01] }} 
                                className={`pt-[5px] pl-[10px] text-[18px] ${item.name===navState?"underline text-green-600 font-black":isDark?"text-white font-semibold":"text-black font-semibold"} hover:font-black font-poetsen`}
                                key={item.id}
                                href={item.to}
                                onClick={() => changeNav(item.name)}
                            >
                                {item.name}
                            </motion.a>
                        )}
                    </div>
                </div>
                <div className="lg:hidden block">
                    <div className="absolute flex right-[10px] mt-[5px]">
                        <motion.div 
                            className="relative right-[10px]"
                            initial={{ opacity: 0, scale: 0.5, x: 1000 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <div className={`border-[1px] border-black w-[52px] h-[27px] rounded-full ${isDark?"bg-blue-500":"bg-yellow-400"}`} onClick={toggleDark}>
                                {(!isDark)?(
                                    <img className="w-[24px] h-[24px] bg-white rounded-full" src={sun}/>
                                ):
                                (
                                    <img className="w-[24px] h-[24px] ml-[25px] bg-white rounded-full" src={moon}/>
                                )}
                            </div>
                        </motion.div>
                        {isOpen ? (
                            <img className="h-[24px] w-[24px]" src={isDark?xMarkWhite:xMarkBlack} onClick={() => handleIsOpen(false)}></img>
                        ):(
                            <img className="h-[24px] w-[24px]" src={isDark?barsWhite:barsBlack} onClick={() => handleIsOpen(true)}></img>        
                        )
                    }
                    </div>
                    <div className="grid absolute right-[10px] top-[40px]">
                        {(isOpen) && (links.map((item,key) => 
                            <motion.a 
                                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0+key/10, ease: [0, 0.71, 0.2, 1.01] }} 
                                variants={variants}
                                className={`pt-[5px] font-poetsen pl-[20px] ${item.name===navState?"underline text-green-600 font-black":isDark?"text-white font-semibold":"text-black font-semibold"} flex justify-end hover:font-black`} 
                                key={item.id}
                                href={item.to}
                                onClick={() => changeNav(item.name)}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}