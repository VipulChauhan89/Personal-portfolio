import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
    return (
        <div>
            <div className="dark:bg-black bg-white w-full h-full absolute top-0 z-0"/>
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;
