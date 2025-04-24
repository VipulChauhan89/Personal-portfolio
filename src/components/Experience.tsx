import { useSelector } from "react-redux";
import { motion, Variants } from "framer-motion";
import TcsLogo from "../assets/tcs_logo.png";
import AccentureLogo from "../assets/accenture_logo.jpeg";
import IncloudoLogo from "../assets/incloudo_logo.jpeg";
import InsigniaConsultancySolutionsLogo from "../assets/insignia_consultancy_solutions_logo.jpeg";

const experience = [
    { companyName:"Tata Consultancy Services", logo:TcsLogo, type:"Full-time", linkedIn:"https://www.linkedin.com/company/tata-consultancy-services/", position:"System Engineer", location:"Pune, Maharashtra, India · On-site", DateOfJoining:"April 2025", DateofExit:"Present" },
    { companyName:"Accenture", logo:AccentureLogo, type:"Full-time", linkedIn:"https://www.linkedin.com/company/accenture/", position:"Associate Software Engineer", location:"Gurugram, Haryana, India · On-site", DateOfJoining:"Jul 2024", DateofExit:"Sep 2024" },
    { companyName:"Incloudo", logo:IncloudoLogo, type:"Internship", linkedIn:"https://www.linkedin.com/company/incloudo/", position:"DevOps Intern", location:"Remote", DateOfJoining:"Jul 2023", DateofExit:"Aug 2023" },
    { companyName:"Insignia Consultancy Solutions",logo:InsigniaConsultancySolutionsLogo, type:"Internship", linkedIn:"https://www.linkedin.com/company/insignia-consultancy-solutions/", position:"Java Backend Intern", location:"Remote", DateOfJoining:"May 2023", DateofExit:"Aug 2023" },
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

export default function Experience() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="experience" className="mt-[50px]">
            <div className="flex justify-center mb-[30px]">
                <h1 className="font-black text-green-600 text-[60px] underline">Experience</h1>
            </div>
            <div className="relative flex justify-center">
                <div className="absolute w-[6px] bg-green-600 h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="w-full relative">
                    {experience.map((xp, key) => (
                        <motion.div className="flex justify-center m-[20px]" key={key} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
                            <motion.div className={`${isDark?"bg-black":"bg-white"} border-[2px] border-green-600 rounded-2xl  flex w-[300px] md:w-[800px] p-[10px]`} variants={key%2==0?moveFromLeft:moveFromRight}>
                                    <div className="flex">
                                        <div className="pt-[30px]">
                                            <img className="h-[40px] w-[40px] bg-white" src={xp.logo}/>
                                        </div>
                                        <div>
                                            <p className={`mx-[10px] text-[30px] font-poetsen hover:cursor-pointer ${isDark?"text-white":"text-black"}`}>
                                                {xp.position}
                                            </p>
                                            <p className={`mx-[10px] text-[20px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                                {xp.companyName} · {xp.type}
                                            </p>
                                            <p className={`mx-[10px] text-[15px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                                {xp.DateOfJoining} - {xp.DateofExit}
                                            </p>
                                            <p className={`mx-[10px] text-[15px] font-poetsen font-thin ${isDark?"text-white":"text-black"}`}>
                                                {xp.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}