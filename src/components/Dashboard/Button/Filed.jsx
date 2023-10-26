import React from 'react';

const Filed = ({type, content}) => {
    return (
        <button type={type} className='bg-red px-6 py-2 text-white rounded-full' >{content}</button>
    );
};

export default Filed;