import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import ThemeToggle from './Components/ThemeToggle'
import Background from './Components/Background';
import { Navbar } from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/AboutMe';
import MyEducation from './Components/MyEducation';
import SkillsSection from './Components/SkillsSection';
import MyprojectSection from './Components/MyprojectSection';
import Findme from './Components/Findme';
import Contacsection from './Components/Contactsection';
import { Footer } from './Components/Footer';
import ServicesSection from './Components/ServicesSection';
import Certifications from './Components/Certifications';


const Home = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div>
      {/* Navbar / Hero / Skills Section */}
         <div>
     <div className='min-h-screen bg-gradient-to-br from-[#17264a] via-[#111024] via-50%-[#4b4b7f] to-[#041945]
 text-white text-foreground overflow-x-hidden '> 

    {/* theme toggle  */}
   <div>
      <ThemeToggle></ThemeToggle>
   </div>

    {/* backgrund effects  */}
    <Background></Background>

    {/* navbar  */}
    <Navbar></Navbar>
    {/* <Outlet></Outlet> */}

    {/* main contect  */}
    <main>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <MyEducation></MyEducation>
        <SkillsSection></SkillsSection>
        <ServicesSection></ServicesSection>
        {/* <Certifications/> */}
        <MyprojectSection></MyprojectSection>
        <Findme></Findme>
        <Contacsection></Contacsection>

    </main>

    {/* footer  */}
 <Footer></Footer>
    </div>
   </div>
    </div>
  );
};

export default Home;





// import React from 'react'
//  import Background from './Components/Background'
//   import TheameTogle from './Components/TheameTogle'
// import { Navbar } from './Components/Navbar'
// import HeroSection from './Components/HeroSection'
// import AboutMe from './Components/AboutMe'
// import SkillsSection from './Components/SkillsSection'
// import MyprojectSection from './Components/MyprojectSection'
// import Contacsection from './Components/Contacsection'
// import Findme from './Components/Findme'
// import { Footer } from './Components/Footer'
// import MyEducation from './Components/MyEducation'
 
// function Home() {
//   return (
//    <div>
//      <div className='min-h-screen bg-gradient-to-br from-[#17264a] via-[#111024] via-50%-[#4b4b7f] to-[#041945]
//  text-white text-foreground overflow-x-hidden '> 

//     {/* theme toggle  */}
//    <div className='hidden'>
//       <TheameTogle ></TheameTogle>
//    </div>

//     {/* backgrund effects  */}
//     <Background></Background>

//     {/* navbar  */}
//     <Navbar></Navbar>

//     {/* main contect  */}
//     <main>
//         <HeroSection></HeroSection>
//         <AboutMe></AboutMe>
//         <MyEducation></MyEducation>
//         <SkillsSection></SkillsSection>
//         <MyprojectSection></MyprojectSection>
//         <Findme></Findme>
//         <Contacsection></Contacsection>

//     </main>

//     {/* footer  */}
//  <Footer></Footer>
//     </div>
//    </div>
//   )
// }

// export default Home