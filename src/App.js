import React ,{useEffect,useState,useRef} from 'react';
import InstagramMedia from './instagram/InstagramMedia';
import TweeterPage from './twitterApp/TweeterPage';
import YoutubePage from './youtube/YoutubePage';
import FacebookMedia from './facebook/FacebookMedia';
import SocialPage from './customsocial/SocialPage'



//AIzaSyDH_6XrkiNRQ3ws2PRfFiOlhe3pfV_qF_s

function App() {
 
  let callApi = useRef(true)
  const [getMediaData,setMediaData]= useState({})
  const [getMediaType,setMediaType]= useState('')

  useEffect(() => {
    if(callApi.current){
      callApi.current=false
      // getInstaData()
      function receiveMessage(event) {
        if (event.origin === 'http://localhost') {
          const receivedData = event.data;
          console.log('Received data in React:', receivedData);
          if(receivedData!=null || receivedData!==undefined){
            setMediaType(receivedData.media_type)
            setMediaData(receivedData)
            console.log('Data Set on use State token is :', );
          
          }     
      }  
    }
    // Add an event listener to listen for messages
    window.addEventListener('message', receiveMessage);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
    } 
  }, []); 

  return (
    <div className="App">
        {getMediaType==='instagram' ?
          (
            <InstagramMedia  mediaData={getMediaData} />
          )
          : getMediaType==='youtube' ?
          (
            <YoutubePage mediaData={getMediaData} ></YoutubePage>
            
          ): getMediaType==='twitter' ?
          (
            <TweeterPage mediaData={getMediaData} ></TweeterPage>
          ):
          getMediaType==='facebook' ?
          (
            <FacebookMedia  mediaData={getMediaData}></FacebookMedia>
          ): getMediaType==='custom' ?
          (
            <SocialPage  mediaData={getMediaData}></SocialPage>
          ):null
          
          
        }
    </div>
  );
}

export default App;
