// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Main() {
//   useEffect(() => {
//     // Your useEffect logic here
//     console.log('useEffect in Main component sdfasdfgsdgsd');

//     // Clean-up function (optional)
//     window.addEventListener('message', receiveMessage);

//     // Function to handle received messages
//     function receiveMessage(event) {
//      console.log('11111111111111');
//         // Access the data sent from the parent window
//         const receivedData = event.data;
//         // Do something with the received data
//         //console.log('Received data in the iframe:', receivedData);
//         console.log('4444444477788888', JSON.stringify(receivedData));
        
         
//     }

//     // Clean up the event listener when the component unmounts
//     return () => {
//         window.removeEventListener('message', receiveMessage);
//     }; 
//   }, []); // Empty dependency array for componentDidMount behavior

//   return (
//     <React.StrictMode>
//       <App />
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



