// import { useState } from 'react'
import Call from '../assets/icon/Call';
import Location from '../assets/icon/Location';
import Mail from '../assets/icon/Mail';


// import '../assets'

function ContactUs() {
//   const [count, setCount] = useState(0)

    return (
        <div id='ContactUs' className=' grid grid-cols-3 bg-gradient-to-r from-darker via-[#3A3456F2] to-darker p-10 rounded-full relative z-10!' >
            <div className='flex gap-5 items-center justify-center'>
                <div><Location/></div>
                <div>
                    <h2>Pay Us a Visit</h2>
                    <p className='my-2'>Union St, Seattle, WA 98101, United States</p>
                </div>
            </div>
            
            <div className='flex gap-5 items-center justify-center'>
                <div><Call/></div>
                <div>
                    <h2>Give Us a Call</h2>
                    <p className='my-2'>(110) 1111-1010</p>
                </div>
            </div>
            <div className='flex gap-5 items-center justify-center'>
                <div><Mail/></div>
                <div>
                    <h2>Send Us a Message</h2>
                    <p className='my-2'>Contact@HydraVTech.com</p>
                </div>
            </div>
        </div>
  )
}

export default ContactUs;
