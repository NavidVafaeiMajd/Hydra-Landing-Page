import LogoIcon from "../assets/icon/Logo-Icon"
import { ButtonSecondary } from "./Buttons"
import Icon from "./Icon"

export default function Footer() {
    return (<>
    <div className="mt-30">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 bg-linear-to-t from-back via-primary to-back gap-2">
                <div className="bg-back max-md:flex justify-center">
                    <LogoIcon className="h-60"/>
                </div>
                <div className="bg-back flex justify-center max-md:p-4">
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">TECHNOLOGIES</a></li>
                        <li><a href="#">HOW TO</a></li>
                        <li><a href="#">JOIN HYDRA</a></li>

                    </ul>
                </div>
                <div className="bg-back flex justify-center max-md:p-4">
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">F.A.Q</a></li>
                        <li><a href="#">SITEMAP</a></li>
                        <li><a href="#">CONDITIONS</a></li>
                        <li><a href="#">LICENSES</a></li>
                    </ul>
                </div>
                <div className="bg-back flex flex-col justify-between pl-10 max-md:p-4 max-md:gap-10">
                    <div><p>SOCIALIZE WITH HYDRA</p></div>
                    <div>
                        <Icon/>
                    </div>
                    <div>
                        <ButtonSecondary content="BUILD YOUR WORLD"/>
                    </div>
                </div>
            </div>
            <div className="h-[1px] bg-linear-to-r from-back via-primary to-back mt-15"></div>
            <div className="py-10 text-center">
                <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            </div>
    </div>
    </>)
}