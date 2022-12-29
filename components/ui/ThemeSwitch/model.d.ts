import { ChangeEvent } from 'react';
export interface ThemeSwitchProps {
  currentTheme: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}