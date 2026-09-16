import { create } from 'zustand';

interface AdminSessionState { isAuthenticated: boolean; signIn: (email: string, password: string) => boolean; signOut: () => void; }
export const useAdminSession = create<AdminSessionState>((set) => ({
  isAuthenticated: false,
  signIn: (email, password) => { const valid = email.length > 0 && password.length > 0; if (valid) set({ isAuthenticated: true }); return valid; },
  signOut: () => set({ isAuthenticated: false }),
}));
