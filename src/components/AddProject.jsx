import React from 'react'

const AddProject = ({addProject, setAddProject}) => {

    const handleSaveProject = () => {
        setAddProject(false);
    }

  return (
    <div className='mt-24 mx-auto w-[50%] '>
        <div className='flex justify-end p-4' >
            <button className='px-8 py-2' >Cancel</button>
            <button onClick={handleSaveProject} className='px-8 bg-black text-white rounded-md' >Save</button>
        </div>
        <form className='' >
            <div className='p-4' >
            <label for='title' >TITLE</label>
            <input type='text' id='title' name='title' className='w-[100%] bg-[#e7e5e4] p-2 ' ></input>
            </div>

            <div className='p-4'>
            <label for='description' >DESCRIPTION</label>
            <textarea id='description' name='description' className='w-[100%] bg-[#e7e5e4] p-2' ></textarea>
            </div>
            
            <div className='p-4'>
            <label for='duedate' >DUE DATE</label>
            <input type='date' id='duedate' name='duedate' className='w-[100%] bg-[#e7e5e4] p-2' ></input>
            </div>
        </form>
      
    </div>
  )
}

export default AddProject
