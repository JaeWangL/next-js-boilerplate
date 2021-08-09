import { useSelector } from 'react-redux';
import { RootState } from '@/redux/rootReducers';
import { SettingsState } from '@/redux/settings/slice';

export interface SettingsStore {
  settings: SettingsState;
}

export const useSettingsStore = (): SettingsStore => {
  const settings = useSelector((state: RootState) => state.settings);

  return {
    settings,
  };
};
