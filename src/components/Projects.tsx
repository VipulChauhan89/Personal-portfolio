import { useSelector } from "react-redux";
import { motion, Variants } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const projects = [
    {
        name: "Personal-portfolio", time: "Nov 2024 - Feb 2025", link: "https://github.com/VipulChauhan89/Personal-Portfolio",detail: "This personal portfolio is a dynamic web application built using React, Tailwind CSS, Redux, and Framer Motion. It showcases my projects, skills, and experience with a sleek and modern UI. The site features smooth animations powered by Framer Motion, ensuring an engaging and interactive user experience. Redux is used for efficient state management, while Tailwind CSS provides a responsive and visually appealing design. The portfolio includes sections such as an about page, project gallery, contact form, and blog updates, offering a comprehensive view of my professional journey. Designed with performance and accessibility in mind, it serves as a testament to my expertise in front-end development."
    },
    { name: "Deliveroo-Clone" , time: "May 2024 - Oct 2024", link: "https://github.com/VipulChauhan89/Deliveroo-Clone", detail: "This Deliveroo clone is a mobile application built using Expo, React Native, Nativewind, Redux, and Sanity. The app enables users to browse restaurants, view available dishes, manage their baskets, and track deliveries in real-time through integrated maps. Key features include seamless real-time order updates, smooth animations, and an intuitive user interface that enhances the overall experience. Content management is handled through Sanity, allowing for dynamic updates to restaurant menus and order data. By leveraging these technologies, the app offers a responsive and smooth user experience, making it a powerful and efficient solution for food delivery services."},
    { name: "Football Manager App" , time: "Sep 2023 - Dec 2023", link: "https://github.com/VipulChauhan89/Football-Manager-App", detail: "The Football Manager App is a dynamic web application developed using Vite, React, Tailwind CSS, and Redux. It provides football enthusiasts with a comprehensive platform for managing teams, rosters, and formations. Users can add, update, or delete players, view detailed player information, and visualize team formations like the 4-3-3 lineup. The app includes a roster importer that allows for seamless CSV file uploads and an intuitive search feature for filtering players by name or position. Utilizing Redux for state management, the app ensures smooth data flow across various components, while PapaParse is used for efficient CSV file parsing. The app also features editable team names, player details such as goals and assists, and a formation preview that validates player positions. Deployed on Netlify, the app offers a robust and responsive experience, empowering users to manage their football teams effectively."},
    { name: "MusicWiki" , time: "Feb 2023 - Mar 2023", link: "https://github.com/VipulChauhan89/MusicWiki", detail: "MusicWiki is an Android application built with Kotlin that integrates the Last.fm API to provide an immersive experience for music lovers. The app allows users to explore various music genres, albums, artists, and tracks in a smooth, intuitive interface. Utilizing the MVVM architecture and Kotlin Coroutines, the app asynchronously fetches data from the API to ensure a seamless, fast user experience. Features include detailed genre listings, album and artist exploration, and a real-time display of tracks. With MVVM for a clean, maintainable code structure and Coroutines for efficient background tasks, MusicWiki offers users a smooth, dynamic interface for discovering new music. This project demonstrates my proficiency in Android development, API integration, and Kotlin programming, delivering a comprehensive solution for music discovery."},
    { name: "Driver Sleepiness detection application" , time: "Dec 2022 - Jan 2023", link: "https://github.com/VipulChauhan89/Driver-sleepiness-detection-application", detail: "I developed a Deep Convolutional Neural Network using YOLOv5 to accurately recognize the awake and drowsy status of a driver in a car, achieving an impressive 96% accuracy rate. This cutting-edge solution leverages the power of deep learning to analyze real-time video streams and detect whether a driver is alert or showing signs of drowsiness. By training the model on extensive datasets of driver behavior and facial features, the system continuously improves its accuracy, offering a robust and reliable tool for driver monitoring. Utilizing YOLOv5, a state-of-the-art real-time object detection system, this project excels in efficiently and accurately detecting key indicators in video streams, making it highly suitable for enhancing driver safety. This project showcases the potential of computer vision and deep learning technologies, with its 96% accuracy underscoring the effectiveness of AI in improving road safety and preventing accidents caused by drowsy driving."},
    { name: "Automatic licence plate detection system" , time: "Sep 2022 - Nov 2022", link: "https://github.com/VipulChauhan89/Automatic-licence-plate-detection", detail: "I developed a Deep Convolutional Neural Network using TensorFlow to recognize license plates on vehicles, achieving an impressive 95% accuracy rate. This innovative deep learning technology analyzes images to accurately identify license plates, improving over time with continuous training on large datasets of license plate images. By leveraging TensorFlow, a powerful and flexible open-source platform for machine learning, the project enables the development of efficient image recognition models. TensorFlow’s user-friendly environment made it ideal for creating, testing, and optimizing the model, ultimately achieving remarkable results in license plate recognition. This project marks a significant advancement in computer vision and image recognition, with the potential to revolutionize vehicle identification and tracking systems. The 95% accuracy highlights the power and effectiveness of deep learning technologies in real-world applications, promising further breakthroughs in vehicle monitoring and security."},
    { name: "Uttarakhand tourism Booster" , time: "Nov 2022 - Nov 2022", link: "https://github.com/VipulChauhan89/Uttarakhand_Tourism_Booster", detail: "As part of the Hock-O-Holic Hackathon, we developed a dynamic web application using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Natural Language Processing (NLP), designed to boost tourism in Uttarakhand. The application offers users an immersive live experience of tourist places across all 13 districts of the state. With the integration of NLP, the application provides personalized recommendations and insights, helping users explore Uttarakhand’s scenic spots and plan their visits with ease. Additionally, the platform enables users to share their travel experiences, connect with other tourists, and discover hidden gems through community engagement. A key feature of the app is its donation option, allowing users to contribute towards the preservation and maintenance of specific tourist locations, promoting sustainable tourism. This innovative web app combines technology, travel, and sustainability to enhance tourism in Uttarakhand, offering a seamless experience for users to explore, share, and contribute to the state’s natural heritage."},
    { name: "Smart Attendance Capturing Mobile Application" , time: "Jul 2022 - Aug 2022", link: "https://github.com/VipulChauhan89/Presence", detail: "As part of the Smart India Hackathon 2022, we developed an Android application using Kotlin and the TensorFlow Lite Face-net model. This innovative app leverages a Deep Convolutional Neural Network (CNN), achieving an impressive 99.8% accuracy in face recognition. The application is designed to mark attendance within a geofenced area, ensuring accurate and secure attendance tracking. By using the Face-net model, users can easily mark their attendance by simply allowing the app to capture their faces, providing a seamless and contactless experience. The added geofencing feature ensures that attendance is recorded only within the predefined boundaries, preventing unauthorized check-ins. This face recognition-based attendance system offers a secure, efficient, and convenient solution for businesses and organizations, simplifying attendance management while enhancing security and reducing manual errors."},
    { name: "Group Chat Web Application" , time: "May 2022 - Jul 2022", link: "https://github.com/VipulChauhan89/Group-Chat_Chatverse", detail: "I developed a web application using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Socket.IO. This application enables users to join different groups by entering a group name and password, allowing them to communicate within the group by sending text messages, images, videos, and GIFs. The app is designed to provide a seamless and user-friendly experience with a clean, modern interface. It offers easy navigation for creating and joining groups, sharing multimedia content, and engaging in conversations with other users. By leveraging Node.js and Socket.IO, the application ensures fast and efficient real-time communication between group members, making it ideal for team collaboration or social networking. The use of MongoDB guarantees secure and quick access to all data, providing users with reliable storage. Overall, this web application delivers a comprehensive solution for group communication and multimedia sharing, making it a perfect tool for both personal and business use."},
    { name: "Supermarket Billing Calculation System" , time: "Sep 2021 - Nov 2021", link: "https://github.com/VipulChauhan89/Supermarket_Billing_Calculation_System", detail: "This project is built using C++ with the goal of addressing the challenges faced by supermarket teams in managing records of items, sales, and generating accurate bills for customers. As supermarkets deal with an increasing number of products, keeping track of all records and ensuring accurate billing can become difficult. This project provides a solution by automating the billing process, offering a fast, reliable, and error-free way to generate bills. By leveraging C++, the system streamlines the management of records and billing, significantly reducing the workload on supermarket teams. The result is a more efficient and seamless shopping experience for customers, with minimal human error. Overall, this project serves as an essential tool for any supermarket, improving accuracy and operational efficiency, making it a valuable asset for businesses of all sizes."},
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

export default function Projects() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="projects" className="mt-[50px]">
            <div className="flex justify-center">
                <h1 className="font-black text-green-600 text-[60px] underline">Projects</h1>
            </div>
            <div className="relative flex justify-center">
                <div>
                    {projects.map((project, key) => (
                        <motion.div className={`flex justify-center mx-[40px] rounded-lg my-[30px] relative ${isDark?"hover:bg-slate-800":"hover:bg-slate-200"}`} key={key} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.3 }}>
                            {key%2===0 && ( 
                                <motion.div className="flex justify-end hover:cursor-pointer pb-[5px]" variants={moveFromRight}>
                                    <div>
                                        <p className={`mx-[10px] text-[30px] font-poetsen underline  ${isDark?"text-white":"text-black"} flex gap-2 pr-[30px]`}>
                                            {project.name} 
                                            <ArrowTopRightOnSquareIcon width={40} height={40} className="text-green-600 absolute right-[5px]"/>
                                        </p>
                                        <p  className={`mx-[10px] text-[20px] font-poetsen ${isDark?"text-white":"text-black"}`}>
                                            {project.time}
                                        </p>
                                        <p  className={`mx-[30px] text-[15px] font-poetsen ${isDark?"text-white":"text-black"}`}>
                                            {project.detail}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                            {key%2!==0 && (
                                <motion.div className="flex justify-start hover:cursor-pointer pb-[5px]" variants={moveFromLeft}>
                                    <div>
                                        <p className={`mx-[10px] text-[30px] font-poetsen underline  ${isDark?"text-white":"text-black"} flex gap-2 pr-[30px]`}>
                                            {project.name} 
                                            <ArrowTopRightOnSquareIcon width={40} height={40} className="text-green-600 absolute right-[5px]"/>
                                        </p>
                                        <p  className={`mx-[10px] text-[20px] font-poetsen ${isDark?"text-white":"text-black"}`}>
                                            {project.time}
                                        </p>
                                        <p  className={`mx-[30px] text-[15px] font-poetsen ${isDark?"text-white":"text-black"}`}>
                                            {project.detail}
                                        </p>
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