import React from 'react'
import noProjects from '../assets/no-projects.png';

const Home = ({setAddProject, addProject}) => {

  const handleNewProject = () => {
    setAddProject(true);
  }

  return (
    <div className=' align-middle text-center mx-auto mt-20 block ' >
      <img className='w-20 h-20 mx-auto  '  src={noProjects} alt='icon' ></img>
      <h1 className='text-[#78716c] font-bold text-xl p-4 ' >No Project Selected</h1>
      <p className='text-[#a8a29e]' >Select a project or get started with a new one</p>
      <button onClick={handleNewProject} className='bg-stone-700 p-2 m-6 rounded-md text-sm  text-stone-400 px-4 ' >Create new Project</button>
    </div>
  )
}

export default Home
