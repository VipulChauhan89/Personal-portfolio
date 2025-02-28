import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"

const publications = [
    {  
        title: "Efficient Employee Tracking with Smart Attendance System Using Advanced Face Recognition and Geofencing", 
        by: "IEEE", date: "August 20, 2024", 
        abstract:"In the modern business world and the rapidly evolving environment, accurate, and timely employee attendance tracking is necessary for effective staff control and productivity levels. Traditional attendance systems are characterized by flaws, time waste, and susceptibility to fraudulent behaviors. Recent solutions based on fingerprint identification, geofencing, and improved face recognition have been applied to address these concerns with deep learning and machine learning technologies. This paper provides information about the smart attendance capturing application to transform the attendance management process through new features such as face recognition, Global Positioning System (GPS) capturing, and geofencing. Deep learning and computer vision are used for proper face recognition, generating high accuracy of 95% and above due to the usage of the most modern algorithms and models. Additionally, attendance data are stored safely, increasing the quality and integrity of the data captured. The system provides an excellent attendance tracking experience, including integration of employee identities with their attendance in/out timestamps and GPS functions for geofence attendance location. Therefore, the data was consistent. It was evidenced due to the integration of deep learning and computer vision technologies described in this paper, allowing us to track attendance efficiently in a variety of work scenarios.",
        link: "https://ieeexplore.ieee.org/abstract/document/10625038"
    }
]

export default function Publications() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="publications" className="mt-[50px]">
            <div className="flex justify-center mb-[30px]">
                <h1 className="font-black text-green-600 text-[60px] underline">Publications</h1>
            </div>
            <div className={`flex justify-center mx-[40px] py-[5px] rounded-lg ${isDark?"hover:bg-slate-800":"hover:bg-slate-200"}`}>
                {publications.map((publication,key) => (
                    <a key={key} href={publication.link}>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-center">
                                <div>
                                    <div className="flex gap-2">
                                        <h1 className={`${isDark?"text-white":"text-black"} font-poetsen font-semibold text-[30px] mx-[10px] underline pr-[40px]`}>{publication.title}</h1>
                                        <ArrowTopRightOnSquareIcon width={40} height={40} className="text-green-600 mt-[2px] absolute right-[50px]"/>
                                    </div>
                                    <h2 className={`${isDark?"text-white":"text-black"} font-poetsen font-semibold text-[20px] mx-[10px]`}>{publication.by+" "+publication.date}</h2>
                                </div>
                            </div>
                            <div>
                                <p className={`${isDark?"text-white":"text-black"} font-poetsen text-[15px] mx-[30px]`}>{publication.abstract}</p>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </div>
        </div>
    );
}