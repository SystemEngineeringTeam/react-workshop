import { useState } from 'react';

export default function UseSetFunctionGood() {
  const [count, setCount] = useState({
    adelie: 0,
    emperor: 0,
  });

  function incrementAdellie() {
    setCount((prev) => ({ ...prev, adelie: prev.adelie + 1 }));
  }

  function incrementEmperor() {
    setCount((prev) => ({ ...prev, emperor: prev.emperor + 1 }));
  }

  return (
    <main>
      <button type="button" onClick={incrementAdellie}>
        incrementAdellie
      </button>
      <button type="button" onClick={incrementEmperor}>
        incrementEmperor
      </button>
      <p>adelie:{count.adelie}</p>
      <p>emperor:{count.emperor}</p>
    </main>
  );
}
