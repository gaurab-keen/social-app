import axios from 'axios';
export const fetchDataFromSocialMedia =(async (url)=>{
  try {
   
    const response = await axios.get(url);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching user timeline:', error);
    return null;
  }
})

// export const fetchDataFromSocialMedia = (async(url) => {
//     try {
//       console.error('1 fetching user timeline:', url);
//       const response = await axios.get(url);
//       console.error(' fetching user timeline:', JSON.stringify(response));
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching user timeline:', error);
//       return null;
//     }
// ) };
