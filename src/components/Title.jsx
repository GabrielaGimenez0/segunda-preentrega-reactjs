import React from 'react';

const Title = ({mensaje}) => {
    return (
        <div>
            <h1 className='text-5xl text-center py-4' > {mensaje} </h1>
        </div>
    );
}

export default Title;
