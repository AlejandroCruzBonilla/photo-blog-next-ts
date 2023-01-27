import { SyntheticEvent } from 'react';

export interface TabsProps {
  value: number
  tabs: Tab[]
  handleChange: (event: SyntheticEvent, newValue: number) => void
}
type Tab = {
  icon?: string | undefined,
  label: string
}