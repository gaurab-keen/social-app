import React from 'react';
import YouTubeList from './YouTubeList';

function YouTubePage({mediaData}) {
  return (
    <div className="App">
     
      <YouTubeList mediaData={mediaData}/>
    </div>
  );
}

export default YouTubePage;