import { useState } from 'react';
import SetKeyAccuratelyBadItem from './Item';

export default function SetKeyAccuratelyBad() {
  const [penguins, setPenguins] = useState([
    { id: 1, name: 'アデリーペンギン' },
    { id: 2, name: 'フンボルトペンギン' },
    { id: 3, name: 'コウテイペンギン' },
    { id: 4, name: 'マゼランペンギン' },
    { id: 5, name: 'アフリカペンギン' },
    { id: 6, name: 'ガラパゴスペンギン' },
    { id: 7, name: 'フィヨルドランドペンギン' },
    { id: 8, name: 'ジェンツーペンギン' },
    { id: 9, name: 'オウサマペンギン' },
    { id: 10, name: 'ヒゲペンギン' },
    { id: 11, name: 'キングペンギン' },
    { id: 12, name: 'キガシラペンギン' },
    { id: 13, name: 'マカロニペンギン' },
    { id: 14, name: 'フェアリーペンギン' },
    { id: 15, name: 'イワトビペンギン' },
    { id: 16, name: 'シュレーターペンギン' },
    { id: 17, name: 'スネアーズペンギン' },
  ]);

  function shuffle() {
    setPenguins((prev) => {
      const copy = [...prev];
      for (let i = copy.length - 1; i >= 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  }

  return (
    <main>
      <div>
        <button type="button" onClick={shuffle}>
          シャッフル
        </button>
      </div>

      <div>
        {penguins.map((penguin, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SetKeyAccuratelyBadItem key={index} name={penguin.name} />
        ))}
      </div>
    </main>
  );
}
