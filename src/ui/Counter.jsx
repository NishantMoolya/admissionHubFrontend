import { useEffect, useState } from "react";

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 10);
  
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);
  
      return () => clearInterval(counter);
    }, [end, duration]);
  
    return <span>{count}+</span>;
  };

  const CounterWithText = ({ text,number=150 }) => {
    return(
      <>
      <div className="flex">
      <div className="bg-white p-4 rounded shadow flex flex-col items-center w-32 h-32 justify-center">
        <h2 className="text-3xl font-bold text-sky-500">
          <Counter end={number} duration={3000} />
        </h2>
        <p className="text-sm font-semibold text-slate-900 text-center">{text}</p>
      </div>
      </div>
      </>
    )
  }
  
  export default CounterWithText;