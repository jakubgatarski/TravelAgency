import React from "react"

export default function Place(props){
    return (
        <div className="place-card">
            <img className="place-img" src={props.imageUrl} />
            <div className="place-info">
                <div className="location-link">
                    <img className="pointer" src="./pointer.png" />
                    <h3 className="place-location">{props.location}</h3>
                    <a href={props.googleMapsUrl} className="place-map_link">Viev on Google Maps</a>
                </div>            
                <h2 className="place-title">{props.title}</h2>
            
                <p className="place-date"> {props.startDate} - {props.endDate}</p>
                <p className="place-description">{props.description}</p>
            </div>    
            
        </div>    
    )
}