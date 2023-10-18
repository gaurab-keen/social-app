import React, { useEffect, useState,useRef } from 'react';
import CardDesign from '../CardDesign';
import '../Media.css'; 
import {Typography} from "@mui/material"
import {fetchDataFromSocialMedia} from '../apicontroller/ApiMethods'
function FacebookMedia({mediaData}) {
  const [posts, setPosts] = useState([]);
  let callApi = useRef(true)
  function isEmpty(obj) { 
    return JSON.stringify(obj) === JSON.stringify({}); 
  } 
  useEffect(() => {
    if(callApi.current){
        callApi.current=false
    let pageId = 'me'; // Replace with the Page ID of the Facebook Page
    let accessToken = 'EAAIR268jo1YBO5h421P1KuirTcZAEX9oeOTKXkvicJCY8h5XhN6YrDSjZAm1NHAOxe1zuItZBhY0Dpttj8uTJJmfyO6I4p1I3ZCfHpMItv7C7JYIQ9tDKp0VaCkLUo9sRKjCTDA0ltIEoob1YZBiJiGihvlcZCT0XpuGFPaswKno0M5CuhseuVTaO8EmiZCVtcrLHXzzhlCAYoZBsFYZD'; // Replace with your Page Access Token
    if(!isEmpty(mediaData)){
        console.log('mediaData '+ JSON.stringify(mediaData));
         accessToken=mediaData.media_token
         pageId=mediaData.media_id
      }   
    const apiUrl = `https://graph.facebook.com/v18.0/${pageId}/feed?access_token=${accessToken}&fields=id,message,full_picture,permalink_url,link,created_time`;


    fetchDataFromSocialMedia(apiUrl).then((response)=>{
         
        //console.log('Youtube data : '+ JSON.stringify(response.data));
        setPosts(response.data);
        //setUserName(feeds.username)
      }).catch((err)=>{
        console.error('Instagram Error: '+ err);
      })
    }

  }, []);

  return (
 
      <div  className="instagram_home"> 
      <Typography >Facebook Page Posts</Typography>
         <div  className="instagram-media">
         {posts.map((item) => {
      let data1 = {
        imageUrl: item.full_picture,
        mediaType: '',
        mediaUrl: item.permalink_url,
        shareUrl:item.permalink_url,
        title: item.message,
        date: item.created_time
      };
      // Wrap the CardDesign component in parentheses and return it
      return (
        <CardDesign key={item.id.videoId}  data={data1}></CardDesign>
      );
    })}
         </div>
    

    </div>

  );
}

export default FacebookMedia;
