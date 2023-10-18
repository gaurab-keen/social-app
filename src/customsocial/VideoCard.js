import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShareButton from '../instagram/ShareButton'

const VideoCard = ({ data }) => {

  const openWebpage = (url) => {
        window.open(url, '_blank');
      };

 function formatDate(inputDateStr) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = new Date(inputDateStr);
        return date.toLocaleDateString('en-US', options);
      }
  return (
    console.log("jwlldqdjqdj",JSON.stringify(data)),
    <Card sx={{ maxWidth:200,margin:2}}>
      <CardActionArea
       onClick={() => openWebpage(data.link)}>
        <CardMedia
          component="img"
          style={{ height: '200px', width:'200px' }} 
          image={data.thumbnail}
          alt={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
               {data.title}
          </Typography>
          {/* <Typography variant="body3" color="text.secondary">
              {formatDate(data.date)} 
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      <ShareButton url={data.shareUrl} title={`Share from Iframe `} text={`Share this data ${data.link}`} />
        <Button size="small" color="primary"
         onClick={() => openWebpage(data.vedio_url)}>
          Play Vedio
        </Button>
      </CardActions>
    </Card>
  );
}
export default VideoCard;