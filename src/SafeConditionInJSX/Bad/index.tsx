import { useState } from 'react';

export default function SafeConditionInJSXBad() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setCount((v) => v + 1);
        }}
      >
        +1
      </button>
      <span>{count}</span>
      <button
        type="button"
        onClick={() => {
          setCount((v) => v - 1);
        }}
      >
        -1
      </button>

      <div>
        {count && <p>0ではありません</p>}
        {count || <p>0です</p>}
        {count < 0 && <p>0未満です</p>}
      </div>
    </main>
  );
}
