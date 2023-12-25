import { PaletteMode } from "@mui/material";


const theme = {
    palette: {
        primary: "#537188",
    },
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                    main : '#537188',
                    light : '#E1D4BB'
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main : '#616161'
                },
            }),
    }
});

export default theme;