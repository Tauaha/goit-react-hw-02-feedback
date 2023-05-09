import React from 'react';
import PropTypes from 'prop-types';
import styles from "components/Feedback/Feedback.module.css"

 const FeedbackOptions = ({options, onLeaveFeedback}) =>{
  
        return (
            <section className={styles.container}>
           
      
        {Object.values(options).map((option, index)=> {
            return(
                <button type='button' key={index} onClick={onLeaveFeedback} className={styles.button}>{option}</button>
               
            )} )}
                 </section> 
        ) }

FeedbackOptions.propTypes ={
    options:  PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
     
      
}
export default FeedbackOptions
           
            

    
   
    