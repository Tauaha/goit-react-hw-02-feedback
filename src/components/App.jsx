import { Component } from 'react';
import React from 'react';


import FeedbackOptions from "components/Feedback/Feedback"
import Statistics from 'components/Statistics/Statistics'
import Section from './Sections/Sections';
import Notification from './Notification/Notification';




export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

     handleIncrement = e=>{
      const option = e.currentTarget.innerHTML;
         this.setState((prevState) => {
             return {
               [option]: prevState[option] + 1,
               
             };
   
        });
    }
   
    countTotalFeedback = () => {
    const totalFeed = Object.values(this.state).reduce((acc, value) => acc + value, 0);
 
    return totalFeed;
     
    };
  countPositiveFeedbackPercentage =()=> {
    const goodState = this.state.good
    const allFeedback = this.countTotalFeedback();
    
    return  Math.round((goodState/allFeedback)*100)
  }
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = this.state;
    
    return (
      <div
      style={{
        margin: "20px",
        height: '100vh',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101'
      }}
    >
    
     <Section title = 'Please leave feedback' >
     <FeedbackOptions 
      options = {['good', 'neutral', 'bad']}
      onLeaveFeedback = {this.handleIncrement}/>
     </Section>
    
    <Section title='Statistics'>
      {total >0? (<Statistics 
      good={options.good} 
      neutral={options.neutral} 
      bad={options.bad}
      total={total} 
      positivePercentage={positivePercentage}/>):
     ( <Notification message="There is no feedback"/>)
       }
    </Section>
    </div>
    );
  }
}

