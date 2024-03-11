import React from 'react'
import { VscServerProcess } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import { SiStrapi,SiXdadevelopers  } from "react-icons/si";
import AboutCart from './AboutCart';
const About = () => {
  return (
    <div className='w-full mx-auto px-4 py-16 bg-black text-white mt-[55px]'>
        <div className='flex flex-col  items-center max-w-[1240px] mx-auto'>
            <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
            <p className='py-4 text-2xl text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Libero deserunt repellat et maiores nesciunt quaerat
                  cum alias saepe dignissimos doloremque eos, 
                  voluptatem quod sunt iste eum ipsa accusamus optio culpa.
            </p>
            {/* Card Conatiner */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12 px-8'>
              {/* Card */}
             <AboutCart icon={ <VscServerProcess size={40} />} heading= 'Reliable Temapar,Proof Network' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
    Lorem ipsum dolor sit, amet consectetur adipisicing elit?'/>
              <AboutCart icon={<SiStrapi size={40} />} heading='Seamless Connection to any API' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
    Lorem ipsum dolor sit, amet consectetur adipisicing elit?' />
              <AboutCart icon={<FaRocket size={40} />} heading='Fire Base Connection to Any site' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
    Lorem ipsum dolor sit, amet consectetur adipisicing elit?'/>
              <AboutCart icon={<SiXdadevelopers size={40} />} heading='Developers Progressive team is here' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
    Lorem ipsum dolor sit, amet consectetur adipisicing elit?'/>
            </div>
        </div>
    </div>
  )
}

export default About