import { useEffect, useState } from "react";

const Timer = ({ orderData }) => {
  if (orderData) {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 })

    const timeDifference = () => {
      const dateEntry = new Date(orderData.dateEntry);
      const currentTime = new Date();
      const difference = currentTime - dateEntry;
      const secondsPassed = Math.floor(difference / 1000);
      const minutes = Math.floor(secondsPassed / 60);
      const seconds = secondsPassed % 60;
      return { minutes, seconds }
    }

    useEffect(() => {
      if (orderData.status === 'pending') {
        const interval = setInterval(() => {
          setTime(timeDifference());
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      } else if (orderData.status === 'ready') {
        setTime(timeDifference())
      }
    }, [orderData]);

    return (
      <>
        <h3 className="timer">{time ? time.minutes + ':' + time.seconds : ''}</h3>
      </>
    )
  }
}

export default Timer
