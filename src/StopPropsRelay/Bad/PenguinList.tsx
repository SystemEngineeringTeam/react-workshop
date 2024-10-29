import PenguinItem from './PenguinItem';

type Props = {
  penguins: ReadonlyArray<{ id: number; name: string }>;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPenguin: { id: number; name: string } | undefined;
  setSelectedPenguin: React.Dispatch<React.SetStateAction<{ id: number; name: string } | undefined>>;
};

export default function PenguinList({ penguins, opened, setOpened, selectedPenguin, setSelectedPenguin }: Props) {
  return (
    <ul>
      {penguins.map(penguin => (
        <PenguinItem
          key={penguin.id}
          opened={opened}
          penguin={penguin}
          selectedPenguin={selectedPenguin}
          setOpened={setOpened}
          setSelectedPenguin={setSelectedPenguin}
        />
      ))}
    </ul>
  );
}
