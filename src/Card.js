import React from 'react';
// import locate from 'C:\Users\vikas\Desktop\travelJournal\myapp3\public\images\locate.png'

export default function Card(props){
    return(
        <>
        <section className='card'>
        <div className="card--container">
           <div className='im'>
                <img src={`../images/${props.image}`} alt="error" className="card--img"></img>
           </div>

           <div className="card--details">
                <div className='card--location'><img src={`../images/locate.png`} alt='err' className='locate'></img>{props.location}
                <a href={props.googleMapsUrl} className="mapp">View on Google map</a>
                </div>

                <h1 className='card--title'>{props.title}</h1>
                <p className='journeyDate'>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
           </div>
        </div>
        </section>
        
        </>
    )
};