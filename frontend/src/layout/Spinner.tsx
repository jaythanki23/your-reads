import React from 'react';


const spinner = require('./spinner.gif');

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img src={spinner} alt={'Loading...'} style={{width: '100px', height: '100px', margin: 'auto', display: 'block'}}/>
    </div>
  )
}

export default Spinner