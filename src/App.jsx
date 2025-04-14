import React, {useState} from "react";
import Gallery from "./components/Gallery";

function App(){
    const [show, setShow] = useState(true); // State to manage visibility of the gallery

    // Function to toggle the visibility of the gallery
    const removeTour = () => {
        setShow(!show);
    };

    return (
        <main>
            <h1>Tour Gallery</h1>
            <Gallery tours={tours} setTours={setTours} onRemove={removeTour}/>
            
        </main>
    );
}

export default App;  