import React from 'react';

const page = ({params}) => {
    console.log(params);
    if(params.features.length === 3){
        return <div>{params.features[2]}</div>
    }
    else if(params.features.length === 2){
        return <div>{params.features[1]}</div>
    }
    else if(params.features.length === 1){
        return <div>{params.features[0]}</div>
    }
    return (
        <div>
            category id
        </div>
    );
};

export default page;