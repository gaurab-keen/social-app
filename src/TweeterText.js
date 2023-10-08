import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TwitterText = () => {
  const [tweets, setTweets] = useState([]);
  const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAGbAHwEAAAAAd7raQKpqceBqSCTAsduVcXOQIf0%3DwR9epAHeHsTCvXIz4ECaCCpJz44ESsopWbHvMfoV27DX472pcq';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.twitter.com/2/tweets',
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
         console.log("data twitts",JSON.stringify(response))
        setTweets(response.data.data);
      } catch (error) {
        console.error('Error fetching Twitter data:', error);
      }
    };

    fetchData();
  }, [bearerToken]);

  return (
    <div>
      <h1>Twitter Posts</h1>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterText;
