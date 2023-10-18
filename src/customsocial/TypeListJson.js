export const getArrayFromType =(async ()=>{

    let data=[]
       const d1={
        type:'video',
        title:'By Google',
        thumbnail:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        vedio_url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        link:'https://gist.github.com/jsturgis/3b19447b304616f18657'
      }
       
        const d2={
          type:'audio',
          title:'By Google',
          thumbnail:'https://mygov.in/sites/default/files/master_image/Episode254.png',
          audio_url:'https://static.mygov.in/static/s3fs-public/mygov_163007285651999461.mp3',
          link:'https://www.mygov.in/mygov-podcast/'
          //https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3
        }
      
       const d3={
          type:'image',
          thumbnail:'https://mygov.in/sites/default/files/master_image/thumbselfiecontest.png',
          title:'Selfie wearing authentic Khadi and Local products',
          link:'https://www.mygov.in/task/selfie-wearing-authentic-khadi-and-local-products/'
        }
       
         const d4={
            type:'image_text',
            thumbnail:'https://static.mygov.in/static/s3fs-public/styles/home-slider-image/public/mygov_168786324482937911.jpg',
            title:'',
            link:'https://www.mygov.in/campaigns/millets/?target=webview&type=campaign&nid=0'
          } 
         
       data.push(d1)
       data.push(d2)
       data.push(d3)
       data.push(d4)
   return data
})
// export const getArrayFromType =(async (type)=>{
//   try {
//     let data={}
//   switch(type){
//     case 'video':
//        data={
//         type:'video',
//         title:'By Google',
//         thumbnail:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
//         vedio_url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//         link:'https://gist.github.com/jsturgis/3b19447b304616f18657'
//       }
//         break;

//    case 'audio':
//         data={
//           type:'audio',
//           title:'By Google',
//           thumbnail:'https://mygov.in/sites/default/files/master_image/Episode254.png',
//           audio_url:'https://static.mygov.in/static/s3fs-public/mygov_163007285651999461.mp3',
//           link:'https://www.mygov.in/mygov-podcast/'
//           //https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3
//         }
//         break;

//    case 'image':
//         data={
//           type:'image',
//           thumbnail:'https://mygov.in/sites/default/files/master_image/thumbselfiecontest.png',
//           title:'Selfie wearing authentic Khadi and Local products',
//           link:'https://www.mygov.in/task/selfie-wearing-authentic-khadi-and-local-products/'
//         }
//         break;   
//     case 'image_text':
//           data={
//             type:'image_text',
//             thumbnail:'https://static.mygov.in/static/s3fs-public/styles/home-slider-image/public/mygov_168786324482937911.jpg',
//             title:'',
//             link:'https://www.mygov.in/campaigns/millets/?target=webview&type=campaign&nid=0'
//           } 
//           break;
//    default:
       
//   }
//   console.log("audio data111",data)
//    return data
//   } catch (error) {
//    // console.error('Error fetching user timeline:', error);
//     return null;
//   }
// })


