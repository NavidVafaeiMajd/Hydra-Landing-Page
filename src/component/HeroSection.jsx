import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef(null);

  const toggleCard = () => {
    if (isOpen) {
      gsap.to(cardRef.current, {
        height: 250,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(cardRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
    setIsOpen(!isOpen);
  };

    return (
      <>
      <section className="relative overflow-hidden rounded-[100px] bg-[url(src/assets/img/Landing6.jpg)] bg-cover bg-top text-white text-center lg:min-h-60 mt-30">
        <div className='lg:absolute bg-back/70 w-[100%] h-[100%]! '>
                <div className="p-8 lg:absolute -top-[5%] md:top-[20%] left-[22%] md:left-[23%]">
                    <h1 className=" max-lg:text-[16px]! font-bold">TECHNOLOGIES & HARDWARE</h1>
                    <h1 className="text-[16px]! ">USED BY HYDRA VR.</h1>
              </div>
              <div className='absolute mt-100'>
                  <p>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                  </p>
              </div>
          </div>
      <div
        ref={cardRef}
        className="max-lg:hidden overflow-hidden "
      >
        <img
          src="src/assets/img/Landing6.jpg"
          alt="Full"
          className="w-full  max-lg:hidden"
        />
      </div>
    </section>
                <button
                    onClick={toggleCard}
                className="max-lg:hidden mx-auto relative z-10 py-5! -mt-10 flex items-center justify-center bg-primary border border-10 border-black/70 rounded-full!"
                >
                    <span className="text-xl rounded-full text-back">{isOpen ? '▲' : '▼'}</span>
                </button>
      </>
  );
};

export default HeroSection;
