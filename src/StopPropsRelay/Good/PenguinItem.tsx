import { useSetAtom } from 'jotai';
import useOpened from './hooks/useOpened';
import { selectedPenguinAtom } from './stores/selectedPenguin';

type Props = {
  penguin: { id: number; name: string };
};

export default function PenguinItem({ penguin }: Props) {
  const setSelectedPenguin = useSetAtom(selectedPenguinAtom);
  const { open } = useOpened();

  const handleClick = () => {
    setSelectedPenguin(penguin);
    open();
  };

  return <li onClick={handleClick}>{penguin.name}</li>;
}
