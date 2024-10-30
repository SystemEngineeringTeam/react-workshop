import PenguinItem from './PenguinItem';

type Props = {
  penguins: ReadonlyArray<{ id: number; name: string }>;
};

export default function PenguinList({ penguins }: Props) {
  return (
    <ul>
      {penguins.map((penguin) => (
        <PenguinItem key={penguin.id} penguin={penguin} />
      ))}
    </ul>
  );
}
