import React,{useRef,useEffect}from 'react'

const Portfolio = () => {
    const aboutRef=useRef(null);
    const scrollToAbout=()=>{
        aboutRef.current.scrollIntoView({
            behaviour:"smooth"
        })
    }
    useEffect(()=>{
        console.log("Portfolio loaded")
    },[])
    // const skills=[
    //     "Java",
    //     "Python",
    //     "C",
    //     "SQL",
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "BootStrap",
    //     "React",
    //     "TailwindCSS"
    // ] 
    // const tools=[
    //     "Git",
    //     "Github",
    //     "Visual Studio Code",
    //     "Vercel",
    //     "Canva",
    //     "Figma",
    //     "MySQL Workbench",
    //     "Firebase"
    // ]
  return (
    <div className='bg-gray-100 text-gray-800'>
        <nav className='bg-blue-600 text-white'>
            <div className='flex px-5 bg-grey-800'>
                <h1 className='font-bold'>Tarushi</h1>
                <ul className='flex gap-6'>
                    <li>
                        <a href="#about" className='hover:text-gray-200'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className='hover:text-gray-200'>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#project" className='hover:text-gray-200'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className='hover:text-gray-200'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
        <section className='h-screen flex flex-col bg-gray-100'>
            <h1 className='font-bold'>Tarushi</h1>
        <p className='text-xl'>Full Stack Developer</p>
        <button onClick={scrollToAbout} className=''>
            <h3>About me</h3>
        <p>Motivated B.Tech CSE student with skills in Java, Python, C, HTML, and MySQL. Strong problem-solving, communication, and teamwork
abilities. Seeking opportunities to apply technical knowledge, gain industry experience, and contribute to innovative software projects.</p>
        
        </button>

        </section>
        
    </div>
  )
}

export default Portfolio
