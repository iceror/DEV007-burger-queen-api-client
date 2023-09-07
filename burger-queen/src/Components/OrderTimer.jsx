import { useEffect, useState } from "react";

const Timer = ({ orderData }) => {
  if (orderData) {
    const [time, setTime] = useState()

    const timeDifference = () => {
      const dateEntry = new Date(orderData.dateEntry);
      const currentTime = new Date();
      const difference = currentTime - dateEntry;
      const secondsPassed = Math.floor(difference / 1000);
      const minutes = Math.floor(secondsPassed/60);
      const seconds = secondsPassed % 60;
      return {minutes, seconds}
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(timeDifference());
      }, 1000);
      
      return () => {
        clearInterval(interval);
      };
    }, [orderData.id]);

    return (
      <>
        <h3>{time ? time.minutes + ':' + time.seconds : ''}</h3>
      </>
    )
  }
}

export default Timer
