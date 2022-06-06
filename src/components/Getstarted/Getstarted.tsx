import React from 'react'

interface GetstartedProps {
    title:string;
}

const GetStarted = (props:GetstartedProps) => {
    return <div>
        {props.title}
    </div>
}

export default GetStarted;