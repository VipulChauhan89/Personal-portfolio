import { useSelector } from "react-redux";
import { motion, Variants } from "framer-motion";

const paragraph = [
    { para: "Hello, I am Vipul Chauhan, a Software Developer a B.Tech (CSE) graduate from Graphic Era Hill University, Dehradun. Throughout my academic journey, I have developed a strong proficiency in programming languages such as C, C++, Java, and Python. My passion for technology has driven me to specialize in web development, mobile app development, and machine learning." },
    { para: "I believe my strengths lie in consistency, leadership, pressure handling, and problem-solving skills. I am passionate about staying updated with the latest technological trends and enjoy playing new mobile games in my free time. With my diverse skill set and dedication to excellence, I am confident that I can be a valuable asset to any organization." },
];

const moveFromRight: Variants = {
    offscreen: {
      x: window.innerWidth,
      scale: 0,
    },
    onscreen: {
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.5
      }
    }
};
const moveFromLeft: Variants = {
    offscreen: {
      x: -window.innerWidth,
      scale: 0,
    },
    onscreen: {
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.5
      }
    }
};

export default function About() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="about" className="mt-[50px] w-full">
            <div className="flex justify-center mb-[30px]">
                <h1 className="font-black text-green-600 text-[60px] font-poetsen underline">About</h1>
            </div>
            <div>
                {paragraph.map((item,key)=>
                    <motion.div 
                      key={key} 
                      className="flex justify-center mb-[20px]" 
                      initial="offscreen" 
                      whileInView="onscreen" 
                      viewport={{ once: true, amount: 0.8 }}
                    >
                      <motion.p 
                        className={`mx-[50px] text-[30px] ${isDark?"text-white":"text-black"} font-poetsen justify-evenly`} variants={key%2==0?moveFromRight:moveFromLeft}
                      >
                        {item.para}
                      </motion.p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
