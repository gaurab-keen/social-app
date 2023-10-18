import React from 'react';
import { Button} from '@mui/material';
const ShareButton = ({ url, title, text }) => {
  const handleShare = () => {
    alert(`We have to set code to share  , 
    (navigator.share) is not working use alternate way`)
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url,
      })
        .then(() => console.log('Shared successfully.'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  };

  return (
    <Button size="small" color="primary" onClick={handleShare}>Share</Button>
  );
};

export default ShareButton;