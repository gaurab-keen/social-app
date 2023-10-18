import React ,{useState,useRef,useEffect} from 'react';
import '../Media.css'; 
import {fetchDataFromSocialMedia} from '../apicontroller/ApiMethods'
import CardDesign from '../CardDesign';
import {Typography} from "@mui/material"

let accessToken = 'IGQWRQYy05VUo3VGtqODlEN1pfRkVFSm1tTXFVdTRSbzZASemlkQ1EyM3JoSG1fd2syWHB2dnBISWhDOWtabVlqVWxSTjU4RHkzbjU1c3luRUl5SGFRU0IzdmxtOEl5R19nRVhRUjBaVmgzcmdvcnQwNlM1SVRkeG8ZD';
let userId="6775431555878039"

const InstagramMedia = ({ mediaData }) => {

  const [getDetailsList,setDetails]=useState([])
  const [userName,setUserName]=useState([])
  let callApi = useRef(true)
  function isEmpty(obj) { 
    return JSON.stringify(obj) === JSON.stringify({}); 
  } 
  useEffect(() => {
    if(callApi.current){
      callApi.current=false
      if(!isEmpty(mediaData)){
        console.error('mediaData '+ JSON.stringify(mediaData));
        accessToken=mediaData.media_token
        userId=mediaData.media_id
      }   
        
        const url=`https://graph.instagram.com/v12.0/${userId}/media?fields=caption,media_url,media_type,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
        fetchDataFromSocialMedia(url).then((response)=>{
          const feeds = response.data;
          setDetails(feeds)
        }).catch((err)=>{
          console.error('Instagram Error: '+ err);
        })
        const url1=`https://graph.instagram.com/v12.0/${userId}/?fields=id,username&access_token=${accessToken}`
        fetchDataFromSocialMedia(url1).then((response)=>{
          const feeds = response;
          setUserName(feeds.username)
        }).catch((err)=>{
          console.error('Instagram Error: '+ err);
        })
      }   
  },[]); 

  return (
    <div  className="instagram_home">
      <Typography >InstaGram</Typography>
      <Typography >{userName}</Typography>
      <div className="instagram-media">
      {getDetailsList.map((item, index) => {
         
         let data1 = {
          imageUrl: item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url,
          mediaType: item.media_type,
          mediaUrl: item.media_url,
          shareUrl: item.permalink,
          title:  item.caption === undefined ? "No capion": item.caption,
          date: item.timestamp
        };
        // Wrap the CardDesign component in parentheses and return it
        return (
          <CardDesign key={item.id.videoId}  data={data1}></CardDesign>
        );
      }  
      )}
    </div>
    </div>
   
  );
};

export default InstagramMedia;
