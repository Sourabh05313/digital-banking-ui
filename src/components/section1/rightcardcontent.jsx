import React from 'react';

const rightcardcontent = (props) => {
  return (
        <div className='h-full absolute w-full top-0 left-0 flex flex-col justify-between p-8'> 
            <h2 className='bg-white text-2xl h-10 w-10 rounded-full flex justify-center items-center font-bold'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem voluptatibus, magni sequi cum fuga!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-700 px-7 py-3 rounded-full text-white text-xl font-semibold '> {props.tag} </button>
                    <button className='bg-blue-700 px-4 py-3 rounded-full text-white text-xl'>➔</button>
                </div>
            </div>
        </div>
  );
}

export default rightcardcontent;
