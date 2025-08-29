import React, { useEffect, useState } from 'react';

const Timer = ({givenTime}) => {
    const [time,setTime] = useState(givenTime);

    useEffect(() => {
setTimeout(() => {
    setTime(time - 1000)
} ,1000);
    } , [time]);

    const formatedTime = (miliseconds) => {
let total_seconds = parseInt(Math.floor(miliseconds / 1000));
let total_minutes = parseInt(Math.floor(total_seconds / 60));
let total_hours = parseInt(Math.floor(total_minutes / 60));
let days = parseInt(Math.floor(total_hours / 24));

let seconds = parseInt(total_seconds % 60);
let minutes = parseInt(total_minutes % 60);
let hours = parseInt(total_hours % 24);

// return `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
return <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="font-mono text-5xl">
      <span>{days}</span>
    </span>
    days
  </div>
  <div className="flex flex-col">
    <span className="font-mono text-5xl">
      <span>{hours}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="font-mono text-5xl">
      <span>{minutes}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="font-mono text-5xl">
      <span>{seconds}</span>
    </span>
    sec
  </div>
</div>
    }

    return (
        <div>{formatedTime(time)}</div>
    );
};

export default Timer;