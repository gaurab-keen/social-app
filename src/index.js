// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Main() {
//   const [getMediaData,setMediaData]= useState({})
//   useEffect(() => {
//     // Your useEffect logic here
//     console.log('useEffect in Main component sdfasdfgsdgsd');
//     function receiveMessage(event) {
//       // Check if the origin of the message is trusted (for security)
//       // if (event.origin === 'http://localhost') {
//         // Access the data sent from the iframe
//         const receivedData = event.data;
//         console.log('Received data in React:', receivedData);
//         setMediaData(receivedData)
        

//         // You can now use the received data in your React component
//         // For example, set it in the component's state
//         // setState(receivedData);
//       // }
//     }

//     // Add an event listener to listen for messages
//     window.addEventListener('message', receiveMessage);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('message', receiveMessage);
//     };
//   }, [getMediaData]); 
//  // Empty dependency array for componentDidMount behavior

//   return (
//     <React.StrictMode>
//       <App mediaData={getMediaData} />
//     </React.StrictMode>
//   );
// }

// root.render(<Main />);




import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



