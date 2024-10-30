type Props = {
  penguin: { id: number; name: string };
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPenguin: { id: number; name: string } | undefined;
  setSelectedPenguin: React.Dispatch<React.SetStateAction<{ id: number; name: string } | undefined>>;
};

export default function PenguinItem({ penguin, setOpened, setSelectedPenguin }: Props) {
  const handleClick = () => {
    setSelectedPenguin(penguin);
    setOpened(true);
  };

  return <li onClick={handleClick}>{penguin.name}</li>;
}
