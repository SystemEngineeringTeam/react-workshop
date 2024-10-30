import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

const openedAtom = atom(false);

export default function useOpened() {
  const [opened, setOpened] = useAtom(openedAtom);

  // function open() {
  //   setOpened(true);
  // }
  const open = useCallback(() => {
    setOpened(true);
  }, [setOpened]);

  // function close() {
  //   setOpened(false);
  // }
  const close = useCallback(() => {
    setOpened(false);
  }, [setOpened]);

  // function toggle() {
  //   setOpened((prev) => !prev);
  // }
  const toggle = useCallback(() => {
    setOpened((prev) => !prev);
  }, [setOpened]);

  return { opened, setOpened, open, close, toggle };
}
