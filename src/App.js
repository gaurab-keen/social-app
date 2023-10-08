

import React ,{useEffect,useState,useRef} from 'react';
import axios from 'axios';
import InstagramMedia from './InstagramMedia';
import TwitterText from './TweeterText';

const accessToken = 'IGQWROOWo1QjFBM18ybFZABcVR3VjBnZAG9jZAFdGSE82VmstWllfcVRjTFBGWmo3RnpKamhDNEpzLVBieVhkc3p1QjRxYmhrbGxmRjhLNFZA4V3I3cUlrSldvV00xSmY1U0gtdnQ3N0xmdUYwQ1RPUk1nZAHdXR081ZAUkZD';
 const userId="6775431555878039"

function App() {
 
  let callApi = useRef(true)
  const [getAllMedia,setAllMedia]=useState([])

  useEffect(()=>{
    console.log('0000000 kkkkkkkk');
    if(callApi.current){
      console.log('0000000');
      callApi.current=false
       getInstaData()
      }     
  },[])

  const getInstaData= ()=>{
          axios.get(`https://graph.instagram.com/v12.0/${userId}/media?fields=caption,media_url,media_type,thumbnail_url,permalink,timestamp&access_token=${accessToken}`)
        .then(response => {
          const feeds = response.data.data;
          setAllMedia(feeds)
          // Process and display the feeds in your React app
        })
        .catch(error => {
          console.error('Error fetching Instagram feeds:', error);
        });
  }

  return (
    <div className="App">
  
          <InstagramMedia  mediaUrls={getAllMedia} />
          {/* <TwitterText></TwitterText> */}
    </div>
  );
}

export default App;
