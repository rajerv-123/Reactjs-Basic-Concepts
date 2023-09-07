import React, { useMemo, useState } from "react";

function UseMemo2() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

    let even =
      (() => {
        let i = 0;
        while (i < 1000000) i++;
        return count % 2 === 0;
      },
      [count]);

//   let even = useMemo(() => {
//     let i = 0;
//     while (i < 1000000000) i++;
//     return count % 2 === 0;
//   }, [count]);

  return (
    <div>
      count: {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click here{" "}
      </button>
      <hr />
      count: {count1}
      <br />
      <button
        onClick={() => {
          setCount(count1 + 1);
        }}
      >
        Click here{" "}
      </button>
    </div>
  );
}

export default UseMemo2;
