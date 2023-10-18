import React, { useEffect, useState } from 'react';
import TwitterListEmbed from './TwitterListEmbed';

const TwitterPage = ({mediaData}) => {
  //const [userName, setUserName] = useState();
  const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAGbAHwEAAAAAd7raQKpqceBqSCTAsduVcXOQIf0%3DwR9epAHeHsTCvXIz4ECaCCpJz44ESsopWbHvMfoV27DX472pcq';

  useEffect(() => {
    //setUserName(mediaData.userName)
    console.error('Tweeter is calling 1 13131:',mediaData.userName)
    // fetchUserTimeline('GaurabAntu').then((data) => {
    //   console.error('Tweeter data');
    //   if (data) {
       
    //     setTweets(data);
    //   }
    // }).catch((exp)=>{
    //   console.error('Tweeter Error',exp);
    // });
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       'https://api.twitter.com/2/tweets',
    //       {
    //         headers: {
    //           Authorization: `Bearer ${bearerToken}`,
    //         },
    //       }
    //     );
    //      console.log("data twitts",JSON.stringify(response))
    //     setTweets(response.data.data);
    //   } catch (error) {
    //     console.error('Error fetching Twitter data:', error);
    //   }
    // };

    //fetchData();
  }, []);

  return (
    <div>
     
      <TwitterListEmbed userName={mediaData.userName}></TwitterListEmbed>
      {/* <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default TwitterPage;
