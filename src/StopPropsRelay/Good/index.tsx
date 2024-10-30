import { useAtomValue } from 'jotai';
import Dialog from './Dialog';
import useOpened from './hooks/useOpened';
import PenguinList from './PenguinList';
import { selectedPenguinAtom } from './stores/selectedPenguin';

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
  const { opened, close } = useOpened();
  const selectedPenguin = useAtomValue(selectedPenguinAtom);

  return (
    <main>
      <PenguinList penguins={penguins} />
      <Dialog opened={opened} close={close} penguin={selectedPenguin} />
    </main>
  );
}
