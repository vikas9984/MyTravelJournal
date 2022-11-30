import './App.css'
import React from 'react';
import Navbar from './Navbar.js'
import data from './data.js'
import Card from './Card.js'
import Footer from './Footer.js'


export default function App(){
    const cards=data.map(item=>{
        return(
            <Card
              image={item.imageUrl}
              location={item.location}
              title={item.title}
              description={item.description}
              googleMapsUrl={item.googleMapsUrl}
              startDate={item.startDate}
              endDate={item.endDate}
             />
        )
    })
    return(
        <>
        <Navbar/>
        {cards}
        <Footer/>
        </>
    )
}
