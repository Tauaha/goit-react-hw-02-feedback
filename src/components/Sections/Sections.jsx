import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, children})=> {
return(
    <>
    <h2>{title}</h2>
    {children}
  </>
)
}

Section.prototype ={
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default Section