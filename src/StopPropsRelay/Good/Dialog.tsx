import { useEffect, useRef } from 'react';

type Props = {
  opened: boolean;
  close: () => void;
  penguin: { id: number; name: string } | undefined;
};

export default function Dialog({ opened, close, penguin }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (dialogElement === undefined) return;

    if (opened) {
      dialogElement?.showModal();
    } else {
      dialogElement?.close();
    }
  }, [opened]);

  return (
    <dialog ref={dialogRef}>
      <p>{penguin?.name}</p>
      <button onClick={close} type="button">
        閉じる
      </button>
    </dialog>
  );
}
