import React from 'react';
import './Sugesstion.css';

function Suggestion() {
  return (
    <div className='suggestions'>
      <div className="suggestions_title">sugestions for you</div>
      <div className="sugesstions_username">
        <div className='suggestion_username'>
          <div className='username_left'></div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
      
    </div>
  )
}

export default Suggestion
