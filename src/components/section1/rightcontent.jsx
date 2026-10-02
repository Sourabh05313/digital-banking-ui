import React from 'react';
import Rightcard from './rightcard';
import rightcardcontent from './rightcardcontent';

const rightcontent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 p-4 flex flex-nowrap gap-10 overflow-auto'>
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} id={idx} tag={elem.tag} img={elem.img}/>
      })}
    </div>
  );
}

export default rightcontent;
