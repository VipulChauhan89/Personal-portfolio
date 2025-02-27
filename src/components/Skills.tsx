import { useSelector } from "react-redux";
import CLogo from "../assets/technologies-logo/C.png";
import CplusplusLogo from "../assets/technologies-logo/C++-(CPlusPlus).png";
import JavaLogo from "../assets/technologies-logo/Java.png";
import PythonLogo from "../assets/technologies-logo/Python.png";
import KotlinLogo from "../assets/technologies-logo/Kotlin.png";
import HtmlLogo from "../assets/technologies-logo/HTML5.png";
import CssLogo from "../assets/technologies-logo/CSS3.png";
import JavaScriptLogo from "../assets/technologies-logo/JavaScript.png";
import TypeScriptLogo from "../assets/technologies-logo/TypeScript.png";
import ReactLogo from "../assets/technologies-logo/React.png";
import ReduxLogo from "../assets/technologies-logo/Redux.png";
import TailwindCssLogo from "../assets/technologies-logo/Tailwind-CSS.png";
import ReactNativeLogo from "../assets/technologies-logo/React.png";
import NodeJsLogo from "../assets/technologies-logo/Node.js.png";
import MySqlLogo from "../assets/technologies-logo/MySQL.png";
import MongoDbLogo from "../assets/technologies-logo/MongoDB.png";
import FirebaseLogo from "../assets/technologies-logo/Firebase.png";
import GitLogo from "../assets/technologies-logo/Git.png";
import GithubLogo from "../assets/technologies-logo/GitHub.png";
import ShellLogo from "../assets/technologies-logo/Powershell.png";
import DokerLogo from "../assets/technologies-logo/Docker.png";
import KubernetesLogo from "../assets/technologies-logo/Kubernetes.png";
import AnsibleLogo from "../assets/technologies-logo/Ansible.png";
import JenkinsLogo from "../assets/technologies-logo/Jenkins.png";
import AwsLogo from "../assets/technologies-logo/AWS.png";
import VsCodeLogo from "../assets/technologies-logo/Visual-Studio-Code-(VS-Code).png";
import AndroidStudioLogo from "../assets/technologies-logo/Android-Studio.png";
import FigmaLogo from "../assets/technologies-logo/Figma.png";
import PostmanLogo from "../assets/technologies-logo/Postman.png";


const skills = [
    { name: "C", logo: CLogo},
    { name: "C++", logo: CplusplusLogo},
    { name: "Java", logo: JavaLogo},
    { name: "Python", logo: PythonLogo},
    { name: "Kotlin", logo: KotlinLogo},
    { name: "HTML", logo: HtmlLogo},
    { name: "CSS", logo: CssLogo},
    { name: "JavaScript", logo: JavaScriptLogo},
    { name: "TypeScript", logo: TypeScriptLogo},
    { name: "React", logo: ReactLogo},
    { name: "Redux", logo: ReduxLogo},
    { name: "Tailwind CSS", logo: TailwindCssLogo},
    { name: "React Native", logo: ReactNativeLogo},
    { name: "Node JS", logo: NodeJsLogo},
    { name: "MySQL", logo: MySqlLogo},
    { name: "MongoDB", logo: MongoDbLogo},
    { name: "Firebase", logo: FirebaseLogo},
    { name: "Git", logo: GitLogo},
    { name: "Github", logo: GithubLogo},
    { name: "Shell", logo: ShellLogo},
    { name: "Docker", logo: DokerLogo},
    { name: "Kubernetes", logo: KubernetesLogo},
    { name: "Ansible", logo: AnsibleLogo},
    { name: "Jenkins", logo: JenkinsLogo},
    { name: "AWS", logo: AwsLogo},
    { name: "VS Code", logo: VsCodeLogo},
    { name: "Android Studio", logo: AndroidStudioLogo},
    { name: "Figma", logo: FigmaLogo},
    { name: "Postman", logo: PostmanLogo},
];

export default function Skills() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="skills" className="mt-[50px]">
            <div className="flex justify-center">
                <h1 className="font-black text-green-600 text-[60px] underline">Skills</h1>
            </div>
            <div className="flex gap-5 flex-wrap justify-center m-[30px]">
                {skills.map((skill,key) => (
                    <div key={key} className="flex gap-2">
                        <img className="h-6 w-6" src={skill.logo}/>
                        <h1 className={`${isDark?"text-white":"text-black"} font-poetsen`}>{skill.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}