// button 
// switch between projects 

import React, { useState } from 'react'

const Sidebar = ({addProject, setAddProject}) => {

  // console.log(addProject);
  
  const handleAddProject = () => {
    // i think, ek prop bhi ayega sath MediaCapabilities... but i dont think ayega ... 
    // i think there was a better way to change & handle this state 
    setAddProject(true);
    // console.log(addProject);
  }

  return (
    <div className='h-screen bg-[#1c1917] w-[20%] rounded-r-2xl  text-[#e7e5e4] p-10 pt-20 '>
      <h1> <b> YOUR <br></br> PROJECTS </b> </h1>
      <div>
        <button className=' p-2 bg-[#57534e] mt-10 mb-10 rounded-md text-md text-[#e7e5e4] ' onClick={handleAddProject} >
          {/* i want to send this state to app.jsx
          why dont i introduce this state app.jsx mei hi, and vaha se as a prop usko idhar lau... 
          state ko hamesha vahi pe initialiuse karo, jo parent component hai. 
          i think there is something wrong here....*/}
            + Add Project
        </button>
      </div>
    </div>
  )
}

export default Sidebar
