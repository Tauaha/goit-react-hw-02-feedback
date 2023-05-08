import React from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const Notification =({message})=> {
    return Notiflix.Notify.info({message});

    
}

Notification.prototype ={
    message: PropTypes.string.isRequired
}
export default Notification