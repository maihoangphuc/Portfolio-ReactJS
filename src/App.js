import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import GoToTop from './component/GoToTop/GoToTop'
import Contact from "./pages/Contact";


function App() {

  console.log('%cWelcome to MHP 🖐🏼 ', 'color: #636aa0; font-size:15px; font-weight: 800');
  console.log('%cI love web programming, thank you for visiting my website 👻👻👻 ', 'color: #28b49e; font-size:15px; font-weight: 800');

  return (
    <>
      <div className="w-[100%] h-auto bg-light dark:bg-dark delay">
        <Header/>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        <GoToTop/>
        <Footer/>
      </div>
    </>
  );
}

export default App;