import React from 'react';
import PropTypes from 'prop-types';


const Notification =({message})=> {
   return (
    <>
     <h5>{message}</h5>
    </>
  )
}
   
      
   

   

    

Notification.prototype ={
    message: PropTypes.string.isRequired
}
export default Notification