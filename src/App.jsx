
import Header from './component/Header'
import { ButtonPrimary, ButtonSecondary } from './component/Buttons'
import Arow1 from './assets/icon/Arows'
import ContactUs from './component/ContactUs'
import Arow2 from './assets/icon/Arows2'
import FancyTopic from './component/FancyTopic'
import Description from './component/Description'
import Cart from './component/Cart'
import Down from './assets/icon/Down'
import Step from './component/Step'
import Form from './component/Form'
import Footer from './component/Footer'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto! w-full! md:px-10! md:pt-5">
        <Header />
        {/* first section */}
        <div className='grid grid-cols-2 my-10 py-10 mt-15'>
          <div className='flex flex-col gap-15'>
            <div className='mt-20'>
              <h1 className='font-bold'>
                Dive Into The Depths <br />
                Of Virtual Reality
              </h1> 
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                sed do eiusmod tempor incididunt ut labore et dolore <br />
                nisl tincidunt eget. Lectus mauris eros in vitae . <br />
              </p>
            </div>
            <div className='flex items-center  gap-5'>
              <div>
                <ButtonSecondary content="BUILD YOUR WORLD" />
              </div>
              <div>
                <Arow1/>
              </div>
            </div>
          </div>
          <div className='flex justify-center relative'>
            
            <img src="src/assets/img/effect.png" className='absolute  -right-10! -top-20 -z-10!' alt="" />
            <img  className='sec-one rounded-[150px]! rounded-bl-[250px]! w-[75%] object-cover border border-black/20 border-25 z-10' src="src/assets/img/landing1.jpg" alt="" />
          </div>
        </div>
        {/* secound section  */}
        <ContactUs />
        {/* third Section */}
        <div className='my-40'>
          <Description firstTopic="INTRODUCTION" secoundTopic="TO HYDRA VR">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </Description>
          <div className='grid grid-cols-2 my-15'>
            <div>
              <img className='shadow-2xl w-[75%]  rounded-[70px]! rounded-tl-[200px]! rounded-br-[200px]!' src="src/assets/img/Landing2.jpg" alt="" />
            </div>
            <div className='flex flex-col gap-10 justify-center'>
              <FancyTopic firstTopic="ABOUT" secoundTopic="HYDRA VR" arowVisibility={false} />
              <p>
                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                n tempor.
              </p>
              <ButtonSecondary content="LET’S GET IN TOUCH"/>
            </div>
          </div>
        </div>
        {/* forth section */}
        <div className='my-40'>
          <Description firstTopic="WHY BUILD" secoundTopic="WITH HYDRA?">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </Description>
          <div className='grid grid-cols-4 gap-5 my-10' >
            <Cart title="SIMULATION" imgLink="src/assets/img/Landing5.jpg">
              Vitae sapien pellentesque habitant morbi
              nunc. Viverra aliquet  porttitor rhoncus 
              libero justo laoreet sit amet vitae.
            </Cart>
            <Cart title="EDUCATION" imgLink="src/assets/img/Landin4.jpg">
              Vitae sapien pellentesque habitant morbi
              nunc. Viverra aliquet  porttitor rhoncus 
              libero justo laoreet sit amet vitae.
            </Cart>
            <Cart title="SELF-CARE" imgLink="src/assets/img/Landing3.jpg">
              Vitae sapien pellentesque habitant morbi
              nunc. Viverra aliquet  porttitor rhoncus 
              libero justo laoreet sit amet vitae.
            </Cart>
            <Cart title="OUTDOOR" imgLink="src/assets/img/Landin5.jpg">
              Vitae sapien pellentesque habitant morbi
              nunc. Viverra aliquet  porttitor rhoncus 
              libero justo laoreet sit amet vitae.
            </Cart>
          </div>
        </div>
        {/* 5th section */}
        <div id='fifth-sec' className='bg-opacity-30! relative mt-50'> 
          <div>
            <FancyTopic firstTopic="TECHNOLOGIES & HARDWARE" secoundTopic="USED BY HYDRA VR." className="text-center opacity-100!" />
          </div>
        </div>
        <Down className="flex items-center justify-center -mt-8! relative z-10!" />
        <div className='flex justify-between items-center'>
          <div><img className='hover:scale-125 transition delay-150 duration-300 ease-in-out' src="src\assets\img\Hydra-Tech1 1.png" alt="" /></div>
          <div><img className='hover:scale-125 transition delay-150 duration-300 ease-in-out' src="src\assets\img\Hydra-Tech2 1.png" alt="" /></div>
          <div><img className='hover:scale-125 transition delay-150 duration-300 ease-in-out' src="src\assets\img\Hydra-Tech3 1.png" alt="" /></div>
          <div><img className='hover:scale-125 transition delay-150 duration-300 ease-in-out' src="src\assets\img\Hydra-Tech4 1.png" alt="" /></div>
        </div>
        {/* 6th section */}
        <div className='my-40'>
          <Description firstTopic="HOW WE BUILD" secoundTopic="WITH HYDRA VR?">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </Description>
          <div className='grid grid-cols-4 my-35'>
            <Step count="01 " firstTopic="3D Conception" secoundTopic="& Design" />
            <Step count="02 " firstTopic="Interaction" secoundTopic="Design"/>
            <Step count="03 " firstTopic="VR World" secoundTopic="User Testing"/>
            <Step count="04 " firstTopic="Hydra VR" secoundTopic="Deploy"/>

            
            
          </div>
        </div>
        {/* 7th section */}
        <Form />
        {/* 8th section */}
        <Footer/>
      </div>

    </>
  )
}

export default App
