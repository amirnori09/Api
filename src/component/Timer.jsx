import React, { useState, useEffect } from 'react';

const 
Timer = () => {
  const [seconds, setSeconds] = useState(120); // 2 minutes = 120 seconds
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(interval); // Stop the timer when it reaches 0
        setTimerEnded(true); // Set the timerEnded state to true
      }
    }, 1000); // Update the timer every 1 second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [seconds]);

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Utility function to convert numbers to Persian
  const toPersianNumber = (number) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (match) => persianDigits[parseInt(match)]);
  };

  return (
    <div>
      {timerEnded ? (
        <p>
          <a href="/" className='text-xs text-slate-600'>دریافت مجدد کد</a>
        </p>
      ) : (
        <p className='text-xs text-slate-600'>
          {toPersianNumber(remainingSeconds)} : {toPersianNumber(minutes)} زمان باقی‌مانده تا ارسال مجدد کد
        </p>
      )}
    </div>
  );
};

export default Timer;
