import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { themeCreator } from './base';
import { ChildrenProps } from '../types/shared';

const ThemeProviderWrapper: FC<ChildrenProps> = (props) => {
  const themeName = 'DefaultTheme';
  const theme = themeCreator(themeName);
  const { children } = props;
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
