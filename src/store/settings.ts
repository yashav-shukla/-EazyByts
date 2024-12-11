import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Settings {
  name: string;
  title: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
}

interface SettingsState {
  settings: Settings;
  updateSettings: (settings: Settings) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: {
        name: 'Yashav Shukla',
        title: 'Full Stack Developer & Designer',
        bio: 'I create beautiful, functional, and user-friendly web applications',
        email: 'yashavshukla1@gmail.com',
        github: 'https://github.com/yashav-shukla',
        linkedin: 'https://www.linkedin.com/in/yashav-shukla/',
      },
      updateSettings: (settings) => set({ settings }),
    }),
    {
      name: 'settings-storage',
    }
  )
);