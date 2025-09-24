import React from "react";

export default function EventCard({title, date, location, description, link, image}) {
 return (
  <article className="card" role="article" aria-label={title}>
   <div className="card-media">
    <img src={image} alt={title} className="card-image" />
   </div> 
   <div className="card-body">
    <h3 className="card-title">{title}</h3>
    <p className="card-meta">{date}</p>
    <p className="card-loca">{location}</p>
    <p className="card-desc">{description}</p>
    {link && (
      <a className="card-btn" href={link} target="_blank" rel="noopener no referrer">
         learn more
       </a>
     )}
   </div>
 </article>    
 );
}