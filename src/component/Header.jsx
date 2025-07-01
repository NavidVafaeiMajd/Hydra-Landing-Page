// import { useState } from 'react'
import LogoIcon from '../assets/icon/Logo-Icon';
import LogoText from '../assets/icon/Logo-text';
import { ButtonPrimary, ButtonSecondary } from './Buttons';

// import '../assets'

function Header() {
//   const [count, setCount] = useState(0)

    return (
        <div className='flex items-baselinev justify-between w-full! items-center!'>
            <div className="flex items-center gap-2!">
                <LogoIcon />
                <LogoText/>
            </div>
            <div className='max-md:hidden'>
                <ul className='flex gap-10'>
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
  )
}

export default Header;
