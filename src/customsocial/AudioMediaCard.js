import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextIcon from '@mui/icons-material/SkipNext';

function AudioMediaCard({data}) {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(false); // State to track play/pause
  const audioRef = React.createRef();


   // Function to toggle play/pause
   const togglePlay = () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling play:', error);
    }
  };

//   function toggleSkipForward() {
//     if(index >= songFiles.length - 1) {
//         setIndex(0);
//         audioPlayer.current.src = songFiles[0];
//         audioPlayer.current.play();
//     } else {
//         setIndex(prev => prev + 1);
//         audioPlayer.current.src = songFiles[index + 1];
//         audioPlayer.current.play();
//     }
// }


// function toggleSkipBackward() {
//     if(index > 0) {
//         setIndex(prev => prev -1);
//         audioPlayer.current.src = songFiles[index -1];
//         audioPlayer.current.play();
//     } 
// }

  return (
    <Card sx={{ maxWidth:200,margin:2}}>
       <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={data.thumbnail}
        alt={data.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {data.title}
          </Typography>   
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          {!isPlaying
                  ?  <IconButton onClick={togglePlay}>
                        <PlayArrowIcon sx={{ height: 38, width: 38 }}/>
                    </IconButton>
                    
                   : <IconButton onClick={togglePlay}>
                        <PauseIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                }

          {/* <IconButton aria-label="play/pause" onClick={togglePlay}>
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton> */}
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
     
       <audio ref={audioRef} src={data.audio_url} preload="auto" />
    </Card>
  );
}
export default AudioMediaCard;

