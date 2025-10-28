import React from 'react'
import { useThemeStore } from '../../store/useThemeStore';


const PREVIEW_MESSAGES = [
  {id: 1, content: "Hey! How's it going ?", isSent: false},
  {id: 2, content: "I'm doing great! Just working on some new features.", isSent: true},
];
export const SettingsPage = () => {
  const {theme, setTheme} = useThemeStore();
  return (
    <div>SettingsPage</div>
  )
}
