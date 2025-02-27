import { useSelector } from "react-redux";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
    const isDark = useSelector((state:any) => state.navbar.isDark);
    return(
        <div id="contact" className="mb-[50px] pt-[50px]">
            <div className="flex justify-center mb-[30px]">
                <h1 className="font-black text-green-600 text-[60px] underline">Contact</h1>
            </div>
            <div className="flex justify-center">
                <div>
                    <h1 className={`text-[30px] font-poetsen ${isDark?"text-white":"text-black"}`}>Let's Connect</h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <hr/>
                    <a className="flex gap-2 hover:cursor-pointer" href="tel:8979672596">
                        <PhoneIcon width={16} height={16} className={`${isDark?"text-white":"text-black"} mt-[5px]`}/>
                        <p className={`font-poetsen ${isDark?"text-white":"text-black"}`}>8979672596</p>
                    </a>
                    <hr/>
                    <a className="flex gap-2 hover:cursor-pointer" href="mailto:vipulchauhan548@gmail.com">
                        <EnvelopeIcon width={16} height={16} className={`${isDark?"text-white":"text-black"} mt-[5px]`}/>
                        <p className={`font-poetsen ${isDark?"text-white":"text-black"}`}>vipulchauhan548@gmail.com</p>
                    </a>
                    <hr/>
                    <div className="flex gap-2">
                        <MapPinIcon width={16} height={16} className={`${isDark?"text-white":"text-black"} mt-[5px]`}/>
                        <p className={`font-poetsen ${isDark?"text-white":"text-black"}`}>Dehradun, Uttarakhand</p>
                    </div>
                    <hr/>
                    <div className="flex gap-2 my-[5px] justify-center">
                        <SocialIcon className="w-[10px] h-[10px]" style={{ width: 24, height: 24 }} url="https://github.com/VipulChauhan89"></SocialIcon>
                        <SocialIcon className="w-[10px] h-[10px]" style={{ width: 24, height: 24 }} url="https://www.linkedin.com/in/vipulchauhan89/"></SocialIcon>
                        <SocialIcon className="w-[10px] h-[10px]" style={{ width: 24, height: 24 }} url="https://leetcode.com/u/leo_9/"></SocialIcon>
                        <SocialIcon className="w-[10px] h-[10px]" style={{ width: 24, height: 24 }} url="https://discord.gg/mPQXQmPj"></SocialIcon>
                        
                    </div>
                    <hr/>
                </div>
                <div></div>
            </div>
        </div>
    );
}