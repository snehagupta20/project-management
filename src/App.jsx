import { useState } from "react";
import Home from "./components/home";
import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";

function App() {
  const [addProject, setAddProject] = useState(false);
  return (
    <main className="mt-9 flex " >
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <Sidebar addProject={addProject} setAddProject={setAddProject} ></Sidebar>
      {!addProject && <Home addProject={addProject} setAddProject={setAddProject}  ></Home>}
      {addProject && <AddProject addProject={addProject} setAddProject={setAddProject}></AddProject> }
    </main>
  );
}

export default App;
