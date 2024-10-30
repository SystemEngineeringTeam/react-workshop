import { useState } from 'react';
import Dialog from './Dialog';
import PenguinList from './PenguinList';

const penguins = [
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
] as const;

export default function StopPropsRelayBad() {
  const [opened, setOpened] = useState(false);
  const [selectedPenguin, setSelectedPenguin] = useState<{ id: number; name: string }>();

  return (
    <main>
      <PenguinList
        opened={opened}
        penguins={penguins}
        selectedPenguin={selectedPenguin}
        setOpened={setOpened}
        setSelectedPenguin={setSelectedPenguin}
      />
      <Dialog opened={opened} penguin={selectedPenguin} setOpened={setOpened} />
    </main>
  );
}
