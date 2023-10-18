import React from 'react';

function VideoPlayer({ videoUrl }) {
  return (
    <div>
      <h1>Video Player</h1>
      <video controls width="640" height="360">
        {/* Add the video URL as the source */}
        <source src={videoUrl} type="video/mp4" />
        
      </video>
    </div>
  );
}

export default VideoPlayer;
