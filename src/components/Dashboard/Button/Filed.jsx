import React from 'react';

const Filed = ({type, content}) => {
    return (
        <button type={type} className='bg-main px-6 py-2 text-white ' >{content}</button>
    );
};

export default Filed;