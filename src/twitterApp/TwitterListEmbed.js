import { useEffect } from 'react';
import React from 'react';
import { Timeline } from 'react-twitter-widgets';

function TwitterListEmbed({userName}) {
    useEffect(()=>{
        console.error('Tweeter is calling 8888888:',userName)
    },[])
  return (
    <div>
      <h2>Twitter List</h2>
      <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: userName, // Replace with the Twitter username you want to display
          }}
          options={{
            height: '400',
          }}
      />
    </div>
  );
}

export default TwitterListEmbed;