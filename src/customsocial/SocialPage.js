import React,{useEffect,useState} from 'react';
import {getArrayFromType} from './TypeListJson';
import AudioMediaCard from './AudioMediaCard';
import VideoCard  from './VideoCard';
import ImageCard from './ImageCard'

function SocialPage({mediaData}) {
  const [dataList,setDataList]=useState([])

  useEffect(()=>{
   
    const promiceData=getArrayFromType()
    promiceData.then((result)=>{
      console.log("audio data 222222",JSON.stringify(result))
      setDataList(result)
    })
   
  },[])

  return (
    <div className="App">
      {dataList.map((item)=>{
         if(item.type==='video')
         {
          return(
            <VideoCard data={item}/>
          )
         }else if(item.type==='audio' ){
          return(
            <AudioMediaCard data={item}/>
          )
         }else{
          return(
            <ImageCard data={item}></ImageCard>
          )
         }
      })}
     
    </div>
  );
}

export default SocialPage;