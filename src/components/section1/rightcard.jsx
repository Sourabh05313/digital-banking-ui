import React from 'react';
import Ri0ghtcardcontent from './rightcardcontent';

const rightcard = (props) => {
  return (
    <div className='h-full w-80 relative rounded-4xl overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        
        <Ri0ghtcardcontent id={props.id} tag={props.tag}/>
    </div>
  );
}

export default rightcard;
