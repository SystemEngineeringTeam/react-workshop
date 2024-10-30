import { atom } from 'jotai';

export const selectedPenguinAtom = atom<{ id: number; name: string }>();
