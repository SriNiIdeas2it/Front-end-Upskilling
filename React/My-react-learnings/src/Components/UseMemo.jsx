import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [tempCount, setTempCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Running expensive calculation...");

    let total = 0;

    // Simulate an expensive operation
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  }, [count]);

  console.log("Component Rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Temp Count: {tempCount}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>

      <button onClick={() => setTempCount(prev => prev + 1)}>
        Increment Temp Count
      </button>

      <h3>Expensive Value: {expensiveValue}</h3>
    </div>
  );
};

export default UseMemo;