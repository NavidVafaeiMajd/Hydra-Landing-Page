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
      <section className="relative overflow-hidden rounded-[100px] bg-[#2d2540] text-white text-center min-h-60">
        <div className='absolute bg-back/70 w-[100%] h-[100%]'>
                <div className="p-8 absolute top-[20%] left-[23%]">
                    <h1 className="text-2xl font-bold">TECHNOLOGIES & HARDWARE</h1>
                    <h1 className="text-lg">USED BY HYDRA VR.</h1>
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
        className="overflow-hidden"
        style={{ height: 250 }}
      >
        <img
          src="src/assets/img/Landing6.jpg"
          alt="Full"
          className="w-full"
        />
      </div>
    </section>
                <button
                    onClick={toggleCard}
                className="mx-auto relative z-10 py-5! -mt-10 flex items-center justify-center bg-primary border border-10 border-black/70 rounded-full!"
                >
                    <span className="text-xl rounded-full text-back">{isOpen ? '▲' : '▼'}</span>
                </button>
      </>
  );
};

export default HeroSection;
