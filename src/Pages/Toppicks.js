import React, { useEffect, useState } from "react";
import "./Toppicks.css";

const Toppicks = () => {
  const [stories, setStories] = useState([]);



  useEffect(() => {
    fetch(
      "https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli"
    )
      .then((response) => response.json())
      .then((data) => {
        
        setStories(data.items[1].mixed_items || []);
       
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
 <div className="toppick-container">
     
      <div className="toppick-list">
        {stories.map((story , key) => (
          <StoryCard
            key={story.id}
            image={story.png_icon}
            alt={story.title}
            title={story.title}
           
          />
        ))}
      </div>
    </div>
   
  
   
  );
};

const StoryCard = ({ image, alt, title }) => {
  return (
    <div className="toppick-card">
      <img src={image} alt={alt} className="card-image" />
      <h3 className="card-title">{title}</h3>
     
    </div>
  );
};







export default Toppicks;
