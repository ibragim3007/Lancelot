import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';
import colors from './colors.json';

export const darkTheme: ThemeProp = {
  ...DefaultTheme,
  colors: colors,
  
};
