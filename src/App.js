import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import './App.css';

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)


    function toggleDarkMode(){
      setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className="container">
            <Navbar 
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
            />
            <Main darkMode={darkMode}/>
        </div>
    )
}