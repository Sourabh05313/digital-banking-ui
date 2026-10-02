import React from 'react';
import Leftcontect from './leftcontect';
import Rightcontent from './rightcontent';

const page1content = (props) => {
  return (
    <div className='h-[90vh] flex gap-10 items-center py-2 px-15 '>
      <Leftcontect />
      <Rightcontent users={props.users}/>
    </div>
  );
}

export default page1content;
