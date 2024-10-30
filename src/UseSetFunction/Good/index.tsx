/**
 * このコードはガチで禁忌を犯した激ヤバコードです。
 * 絶対に真似しないでください。
 */

import { useReducer, useState } from 'react';

export default function UseSetFunctionBad() {
  const [count] = useState({
    adelie: 0,
    emperor: 0,
  });
  const forceUpdate = useReducer((v) => !v, false)[1];

  function incrementAdellie() {
    count.adelie += 1;
    forceUpdate();
  }

  function incrementEmperor() {
    count.emperor += 1;
    forceUpdate();
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
