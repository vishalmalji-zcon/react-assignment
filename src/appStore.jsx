import create from 'zustand';
import { persist } from 'zustand/middleware';

let appStore = (set) => ({
    dopen: true,
    rows: [],
    setRows: (rows) => set((state) => ({ rows: rows })),
    updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
    user: '',
    setUser: (user) => set((state) => ({ user: user })),
    cOpen: false,
    updateColOpen: (cOpen) => set((state) => ({ cOpen: cOpen })),
    projects: [],
    setProjects: (projects) => set((state) => ({ projects: projects })),

})

appStore = persist(appStore, { name: 'my_app_store' });
export const useAppStore = create(appStore)