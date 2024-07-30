import React, { useEffect, useState } from "react";
import "./Toplist.css";

const Yourlisteningschedule = () => {
  const [stories, setStories] = useState([]);

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    fetch(
      "https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli"
    )
      .then((response) => response.json())
      .then((data) => {

        setStories(data.items[2].mixed_content_items || []);
     
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
 <div className="toplist-container">
      <h2 className="heading">Your Listening Schedule</h2>
      <div className="story-list">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            image={story.image}
            alt={story.title}
            title={story.title}
            rating={story.overall_rating.toFixed(1)}
            duration={formatDuration(story.duration_s)}
          />
        ))}
      </div>
    </div>
   
  
   
  );
};

const StoryCard = ({ image, alt, title, rating, duration }) => {
  return (
    <div className="card">
      <img src={image} alt={alt} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <div className="card-info">
        <span className="card-rating">{rating} ⭐</span>
        <span className="card-duration">{duration}</span>
      </div>
    </div>
  );
};




export default Yourlisteningschedule;
