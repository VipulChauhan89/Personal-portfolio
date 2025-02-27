import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const achievements = [
    { name: "Smart India Hackathon, 2022.", by: "Ministry of Education's Innovation Cell (MIC) and All India Council for Technical Education (AICTE).", detail: "Runnerups", link: "https://www.linkedin.com/posts/vipulchauhan89_sk794-winners-winners-activity-6971134465020489728-11II?utm_source=share&utm_medium=member_desktop"},
    { name: "Poornima Hackathon, 2022.", by: "PIET AICTE IDEA LAB & Poornima Institute of Engineering & Technology, Jaipur.", detail: "25th/540 Teams", link: "https://www.linkedin.com/posts/vipulchauhan89_fantastic-experience-innovators-activity-7040226214787096576-stMQ?utm_source=share&utm_medium=member_desktop"},
    { name: "Explore AI 2.0 Hackathon, 2023.", by: "Yamaha Motors Solution Ltd. India.", detail: "10th/140 Teams", link: "https://www.linkedin.com/posts/vipulchauhan89_ymsli-hardwork-dedication-activity-7060448324402708480-I0Km?utm_source=share&utm_medium=member_desktop"}
];
export default function Achievements() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="achievements" className="mt-[50px]">
            <div className="flex justify-center mb-[30px]">
                <h1 className="font-black text-green-600 text-[60px] underline">Achievements</h1>
            </div>
            <div className="flex justify-center">
                <div>
                    {achievements.map((achievement,key) => (
                        <a href={achievement.link}>
                            <motion.div 
                                
                                key={key} 
                                className={`mx-[20px] mb-[10px] px-[10px] py-[4px] rounded-md ${isDark?"hover:bg-slate-800":"hover:bg-slate-200"} relative`}
                            >
                                <div>
                                    <h1 className={`${isDark?"text-white":"text-black"} font-semibold text-[50px] leading-none font-poetsen flex pr-[35px]`}>
                                        {achievement.name} 
                                        <ArrowTopRightOnSquareIcon width={40} height={40} className="text-green-600 absolute right-[5px]"/>
                                    </h1>
                                    <h3 className={`${isDark?"text-white":"text-black"} font-poetsen`}>by {achievement.by}</h3>
                                </div>
                                <h3 className="text-green-600 font-semibold font-poetsen">{achievement.detail}</h3>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}