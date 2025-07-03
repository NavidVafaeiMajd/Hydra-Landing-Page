import { useState } from 'react'
import HamburgerButton from '../assets/icon/HamburgerButton';
import LogoIcon from '../assets/icon/Logo-Icon';
import LogoText from '../assets/icon/Logo-text';
import { ButtonPrimary, ButtonSecondary } from './Buttons';
import { RxCross1 } from "react-icons/rx";

// import '../assets'

function Header() {
    const [rightval, setright] = useState("1000");
    // const [neg, setneg] = useState("");

    function handlerHamburger() {
        setright(0);
        // setneg("")
    }
    return (<>
        <div className='flex items-baselinev justify-between w-full! items-center! py-5'>
            <div className="flex items-center gap-2!">
                <LogoIcon className="w-25"/>
                <LogoText/>
            </div>
            <div className='max-lg:hidden'>
                <ul className='flex gap-10'>
                    <li><a href="#"> ABOUT </a></li>
                    <li><a href="#"> SERVICES</a></li>
                    <li><a href="#">TECHNOLOGIES</a></li>
                    <li><a href="#">HOW TO</a></li>
                </ul>
            </div>
            <HamburgerButton onClick={handlerHamburger } />
            <div className='flex gap-5 max-md:hidden'>
                <ButtonPrimary content="CONTACT US" />
                <ButtonSecondary content="JOIN HYDRA"/>
            </div>
        </div>
        <div id="mobile-menu" className={`gap-5 md:hidden py-5 fixed left-${rightval}! top-0 h-full w-full bg-darker z-50 flex flex-col justify-between items-center`} >
            <RxCross1 className='w-10 h-10 text-right! ' onClick={() => {
                setright(1000);
                // setneg("-");
            }}/>
            <div className=''>
                <ul className='flex flex-col items-center gap-10'>
                    <li><a href="#"> ABOUT </a></li>
                    <li><a href="#"> SERVICES</a></li>
                    <li><a href="#">TECHNOLOGIES</a></li>
                    <li><a href="#">HOW TO</a></li>
                </ul>
            </div>
            <div className='flex gap-5'>
                <ButtonPrimary content="CONTACT US" />
                <ButtonSecondary content="JOIN HYDRA"/>
            </div>
        </div>
        </>
  )
}

export default Header;
