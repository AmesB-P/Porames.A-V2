import { useMediaQuery } from "@mui/material";

type ThemeProps = {
    breakpoints: {
      up(arg0: string): string;
      between(arg0: string, arg1: string): string;
      down(arg0: string): string;
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    // ... other theme properties
  };

  
  export const GetBreakpoint = () => {
  
    const breakpoints = {
      xs: useMediaQuery((theme: ThemeProps)=>theme.breakpoints.down('sm')),
      sm: useMediaQuery((theme: ThemeProps)=>theme.breakpoints.between('sm', 'md')),
      md: useMediaQuery((theme: ThemeProps)=>theme.breakpoints.between('md', 'lg')),
      lg: useMediaQuery((theme: ThemeProps)=>theme.breakpoints.between('lg', 'xl')),
      xl: useMediaQuery((theme: ThemeProps)=>theme.breakpoints.up('xl')),
    };
  
    const currentBreakpoint = Object.entries(breakpoints).find(([key, matches]) => matches)?.[0] || 'xl';
  
    return currentBreakpoint;
  };