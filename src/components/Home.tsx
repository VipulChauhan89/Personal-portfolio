import { motion } from "framer-motion";
import Photo from "../assets/Photo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const tech = [
    { name: "Full-Stack Overthinker (aka Web Developer)" }, 
    { name: "Stack Overflow Certified (App Developer)" }, 
    { name: "Professional Googler (Keen Learner)" },
];

export default function Home() {

    const isDark = useSelector((state:any) => state.navbar.isDark);
    const [text, setText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const speed = isDeleting ? 50 : 100; 

    useEffect(() => {
        const currentText = tech[index].name;
        let timeout=10;

        if (!isDeleting && text === currentText) {
            timeout = setTimeout(() => setIsDeleting(true), 1000); 
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % tech.length);
        } else {
            timeout = setTimeout(() => {
                setText((prev) =>
                    isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
                );
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return(
        <div id="home">
            <div className="flex justify-center gap-10">
                <div className="lg:block hidden mt-[150px]">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.5, x: -500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.8, 1.01] }}
                        className={`${isDark?"text-white":"text-black"} font-black text-[60px] font-poetsen`}
                    >
                        Hi there, I am
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5, x: -500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: .6, ease: [0, 0.71, 0.8, 1.01] }} 
                        className="font-black text-green-600 text-[60px] font-poetsen"
                    >
                            Vipul Chauhan
                    </motion.h1>   
                    <motion.h1
                        className={`text-[20px] mt-[10px] font-poetsen text-center ${isDark?"text-white":"text-black"}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {text}|
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, x: -500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: .9, ease: [0, 0.71, 0.8, 1.01] }}
                        className="flex gap-5 justify-center mt-[40px]"
                    >
                        <a href="https://github.com/VipulChauhan89">
                            <motion.h1 
                                whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "#38A169",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 10 
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`font-poetsen text-[30px] w-[140px] bg-green-600 rounded-full text-center hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                Github
                            </motion.h1>
                        </a>
                        <a href="../assets/Resume_VipulChauhan.pdf" download={true}>
                            <motion.h1 whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "#38A169",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 10 
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`font-poetsen text-[30px] w-[140px] bg-green-600 rounded-full text-center hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                Resume
                            </motion.h1>
                        </a>
                    </motion.div> 
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, x: -500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: .9, ease: [0, 0.71, 0.8, 1.01] }}
                        className="flex gap-5 justify-center mt-[30px]"
                    >
                        <a href="#contact">
                            <motion.h1 
                                whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "#38A169",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 10 
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`font-poetsen text-[30px] w-[280px] bg-green-600 rounded-full text-center hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                Let's Connect
                            </motion.h1>
                        </a>
                    </motion.div> 
                </div>
                <div className="relative flex justify-center items-center mb-[50px]">
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            rotate: [0, 180, 0],
                        }}
                        transition={{
                            duration: 2,
                            ease: [0.25, 1, 0.5, 1], // Smooth cubic bezier for organic movement
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="absolute w-[250px] h-[250px] border-4 border-green-600 opacity-60 z-10"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0, 0.4, 0],
                            borderRadius: ["50%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 0.2, // Delayed to sync with square rotation
                        }}
                        className="absolute w-[300px] h-[300px] border-4 rounded-full border-green-600 opacity-50 z-5"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0, 0.3, 0],
                            borderRadius: ["50%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: 0.4, // Slightly later for a ripple effect
                        }}
                        className="absolute w-[350px] h-[350px] border-4 rounded-full border-green-600 opacity-40 z-0"
                    />
                    <img className="w-[500px] h-[640px] rounded-[5%] z-20" src={Photo} alt="Photo" />
                    <div className="absolute bottom-[-50px] text-center">
                        <h1 className={`font-poetsen text-[35px] ${isDark ? "text-white" : "text-black"}`}>
                            Software <span className="text-green-600">Developer</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex justify-center">
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.5, x: -1000 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.8, 1.01] }}
                        className={`${isDark?"text-white":"text-black"} font-black text-[60px] pl-[20px] font-poetsen`}
                    >
                        Hi there, I am
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5, x: -1000 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: [0, 0.71, 0.8, 1.01] }} 
                        className="font-black text-green-600 text-[60px] pl-[20px] font-poetsen"
                    >
                        Vipul Chauhan
                    </motion.h1>
                    <motion.h1
                        className={`text-[20px] mt-[10px] font-poetsen text-center ${isDark?"text-white":"text-black"}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {text}|
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, x: -500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: .9, ease: [0, 0.71, 0.8, 1.01] }}
                        className="flex gap-5 justify-center mt-[40px]"
                    >
                        <a href="https://github.com/VipulChauhan89">
                            <motion.h1 
                                whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "#38A169", // Lighter shade of green for hover
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Soft shadow effect
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 10 
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`font-poetsen text-[30px] w-[140px] bg-green-600 rounded-full text-center hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                Github
                            </motion.h1>
                        </a>
                        <a href="../assets/Resume_VipulChauhan.pdf" download={true}>
                            <motion.h1 whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "#38A169", // Lighter shade of green for hover
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Soft shadow effect
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 10 
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`font-poetsen text-[30px] w-[140px] bg-green-600 rounded-full text-center hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                Resume
                            </motion.h1>
                        </a>
                    </motion.div> 
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, x: -500 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: .9, ease: [0, 0.71, 0.8, 1.01] }}
                        className="flex gap-5 justify-center mt-[30px]"
                    >
                        <a href="#contact">
                            <motion.h1 
                                whileHover={{ 
                                    scale: 1.1, 
                                    backgroundColor: "#38A169",
                                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                    transition: { 
                                        type: "spring", 
                                        stiffness: 300, 
                                        damping: 10 
                                    }
                                }}
                                transition={{ duration: 0.3 }}
                                className={`font-poetsen text-[30px] w-[280px] bg-green-600 rounded-full text-center hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                Let's Connect
                            </motion.h1>
                        </a>
                    </motion.div> 
                </div>
            </div>
        </div>
    );
}