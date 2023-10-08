import React ,{useState} from 'react';
import './InstagramMedia.css'; 
import VideoPlayer from './VideoPlayer';
import Modal from './Modal';

const InstagramMedia = ({ mediaUrls }) => {

  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function formatDate(inputDateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(inputDateStr);
    return date.toLocaleDateString('en-US', options);
  }
  const myVedio = (item) => {
    if(item.media_type === "VIDEO"){
      openModal()
           //open Vedioplyer
           console.log("idhiwe ",item.media_url)
           setSelectedVideoUrl(item.media_url)       
    }
    else{
      return alert("dladlajdJD")
     }
  };
  // const closeVideo = () => {
    
  //   setSelectedVideoUrl(null);
  //   closeModal()
  // };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    
    <div className="instagram-media">
       <Modal isOpen={isModalOpen} onClose={closeModal}>
        <VideoPlayer videoUrl={selectedVideoUrl} />
      </Modal>
       {/* {selectedVideoUrl && (
        <VideoPlayer videoUrl={selectedVideoUrl} onClose={closeVideo} />
      )} */}
      {mediaUrls.map((item, index) => (
        <div key={item.id}> 
          <img  
          onClick={() => myVedio(item)}
          
          src={item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url}
            alt={`Instagram Media ${index}`} 
            className="instagram-image"/>
        <p> Date :- {formatDate(item.timestamp)}</p>
        </div>
        
      ))}
     
      
    </div>
  );
};

export default InstagramMedia;
