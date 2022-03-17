import React from "react"
import Navbar from "./components/Navbar.js"
import Place from "./components/Place.js"
import data from "./data"

export default function App(){
    const places = data.map(item => {
        return (
            <Place
                key={item.id}
                {...item}
                
            />
        )
    }) 
    return(
        <>  
            <Navbar />
            <section className="cards-list">
                {places}
            </section>
        </>    
    )
}