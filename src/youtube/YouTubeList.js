import React, { useState, useEffect,useRef} from 'react';
import CardDesign from '../CardDesign';
import '../Media.css'; 
import {Typography} from "@mui/material"
import {fetchDataFromSocialMedia} from '../apicontroller/ApiMethods'

const YouTubeList = ({mediaData}) => {
  let apiKey = 'AIzaSyDH_6XrkiNRQ3ws2PRfFiOlhe3pfV_qF_s';
let channelId = 'UCfjTOrCPnAblTngWAzpnlMA';  

  const [videos, setVideos] = useState([]);
  let callApi = useRef(true)
  function isEmpty(obj) { 
    return JSON.stringify(obj) === JSON.stringify({}); 
  }

  useEffect(() => {
    if(callApi.current){
      callApi.current=false
    if(!isEmpty(mediaData)){
       apiKey = mediaData.api_key;
       channelId = mediaData.channel_id;
    } 
    
    // Replace with the channel ID you want to fetch
    
     const url1=`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
     fetchDataFromSocialMedia(url1).then((response)=>{
         
          //console.error('Youtube data : '+ JSON.stringify(response));
          setVideos(response.items);
          //setUserName(feeds.username)
        }).catch((err)=>{
          console.error('Instagram Error: '+ err);
        })
      }
  }, []);

  return (
    <div  className="instagram_home"> 
      <Typography >Youtube </Typography>
         <div  className="instagram-media">
         {videos.map((item) => {
      let data1 = {
        imageUrl: item.snippet.thumbnails.medium.url,
        mediaType: 'VIDEO',
        mediaUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
        shareUrl:`https://www.youtube.com/embed/${item.id.videoId}`,
        title: item.snippet.title,
        date: item.snippet.publishedAt
      };
      // Wrap the CardDesign component in parentheses and return it
      return (
        <CardDesign key={item.id.videoId}  data={data1}></CardDesign>
      );
    })}
         </div>
    

    </div>
  );
};

export default YouTubeList;