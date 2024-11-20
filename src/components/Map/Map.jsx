import React from "react";

const Map = () => {
  return (
    <div>
      <h1>Custom Google Map</h1>
      {/* <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1rWVL7-ObutJZd9PlLtzqS4kounhEzHg&amp;ehbc=2E312F"
        width="100%" // Adjust width as needed
        height="480"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        title="Custom Google Map"
      ></iframe> */}

      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1MIl4ZEjroihd28dTr-khcwUvtHMjKcQ&ehbc=2E312F"
        width="100%"
        height="550"
      ></iframe>
    </div>
  );
};

export default Map;
