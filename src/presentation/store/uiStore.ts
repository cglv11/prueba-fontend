// src/store/uiStore.ts
import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

interface UIState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isUserModalOpen: boolean;
  openUserModal: () => void;
  closeUserModal: () => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      set => ({
        searchTerm: '',
        setSearchTerm: term => set({searchTerm: term}),
        isUserModalOpen: false,
        openUserModal: () => set({isUserModalOpen: true}),
        closeUserModal: () => set({isUserModalOpen: false}),
      }),
      {name: 'ui-storage'},
    ),
    {name: 'UIStore'},
  ),
);
