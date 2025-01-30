import { create } from "zustand";

interface AlbumData {
  nome: string;
  dataPublicacao: string;
  artista: string;
  participacao?: string;
  duracaoMinutos: string;
  quantidadeMusicas: string;
  subgenero?: string;
  url?: string;
}

interface CadastroState {
  dataStep1: Partial<AlbumData>;
  dataStep2: Partial<AlbumData>;
  emptyFieldsStep1: number;
  emptyFieldsStep2: number;
  setEmptyFieldsStep2: (value: number) => void;
  setEmptyFieldsStep1: (value: number) => void;
  setDataStep1: (values: Partial<AlbumData>) => void;
  setDataStep2: (values: Partial<AlbumData>) => void;
}

export const useCadastroStore = create<CadastroState>((set) => ({
  dataStep1: {},
  dataStep2: {},
  emptyFieldsStep1: 0,
  emptyFieldsStep2: 0,
  setEmptyFieldsStep2: (value) => set({ emptyFieldsStep2: value }),
  setEmptyFieldsStep1: (value) => set({ emptyFieldsStep1: value }),
  setDataStep1: (values) =>
    set((state) => ({ dataStep1: { ...state.dataStep1, ...values } })),
  setDataStep2: (values) =>
    set((state) => ({ dataStep2: { ...state.dataStep2, ...values } })),
}));
