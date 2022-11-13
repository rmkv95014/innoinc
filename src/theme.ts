import { extendTheme } from '@chakra-ui/react';

export const breakpoints = {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em'
};
export const theme = extendTheme({
    fonts: {
      heading: `'HKGrotesk'`,
      body: `'OpenSans'`
    }
});