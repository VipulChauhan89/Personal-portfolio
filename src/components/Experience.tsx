import { useSelector } from "react-redux";
import { motion, Variants } from "framer-motion";
import AccentureLogo from "../assets/accenture_logo.jpeg";
import IncloudoLogo from "../assets/incloudo_logo.jpeg";
import InsigniaConsultancySolutionsLogo from "../assets/insignia_consultancy_solutions_logo.jpeg";

const experience = [
    { companyName:"Accenture", logo:AccentureLogo, type:"Full-time", linkedIn:"https://www.linkedin.com/company/accenture/", position:"Associate Software Engineer", location:"Gurugram, Haryana, India · On-site", DateOfJoining:"Jul 2024", DateofExit:"Sep 2024" },
    { companyName:"Incloudo", logo:IncloudoLogo, type:"Internship", linkedIn:"https://www.linkedin.com/company/incloudo/", position:"DevOps Intern", location:"Remote", DateOfJoining:"Jul 2023", DateofExit:"Aug 2023" },
    { companyName:"Insignia Consultancy Solutions",logo:InsigniaConsultancySolutionsLogo, type:"Internship", linkedIn:"https://www.linkedin.com/company/insignia-consultancy-solutions/", position:"Java Backend Intern", location:"Remote", DateOfJoining:"May 2023", DateofExit:"Aug 2023" },
];

const moveFromRight: Variants = {
    offscreen: {
      x: 500
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1
      }
    }
};

const moveFromLeft: Variants = {
    offscreen: {
      x: -500
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1
      }
    }
};

export default function Experience() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="experience" className="mt-[50px]">
            <div className="flex justify-center mb-[30px]">
                <h1 className="font-black text-green-600 text-[60px] underline">Experience</h1>
            </div>
            <div className="relative flex justify-center">
                <div className="absolute w-[6px] bg-green-600 h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="w-full">
                    {experience.map((xp, key) => (
                        <motion.div className={`flex items-center my-[20px] ${key%2===0?"justify-end":"justify-start"}`} key={key} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 1 }}>
                            {key%2===0 && ( 
                                <motion.div className="flex w-1/2" variants={moveFromRight}>
                                    <div className="pt-[30px] ml-[30px]">
                                        <img className="h-[40px] w-[40px]" src={xp.logo}/>
                                    </div>
                                    <div>
                                        <p className={`mx-[50px] text-[30px] font-poetsen hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                            {xp.position}
                                        </p>
                                        <p className={`mx-[50px] text-[20px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                            {xp.companyName} · {xp.type}
                                        </p>
                                        <p className={`mx-[50px] text-[15px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                            {xp.DateOfJoining} - {xp.DateofExit}
                                        </p>
                                        <p className={`mx-[50px] text-[15px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                            {xp.location}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                            {key%2!==0 && (
                                <motion.div className="flex justify-end w-1/2" variants={moveFromLeft}>
                                    <div className="flex">
                                        <div className="pt-[30px] ml-[50px]">
                                            <img className="h-[40px] w-[40px]" src={xp.logo}/>
                                        </div>
                                        <div>
                                            <p className={`mx-[50px] text-[30px] font-poetsen hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                                {xp.position}
                                            </p>
                                            <p className={`mx-[50px] text-[20px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                                {xp.companyName} · {xp.type}
                                            </p>
                                            <p className={`mx-[50px] text-[15px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                                {xp.DateOfJoining} - {xp.DateofExit}
                                            </p>
                                            <p className={`mx-[50px] text-[15px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                                {xp.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}