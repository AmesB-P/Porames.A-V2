import { createTheme, PaletteMode } from "@mui/material";
import { useState, useMemo } from "react";
import { getDesignTokens } from "./theme";
// import theme, { getDesignTokens } from "./theme";

export const useColorTheme = () => {

    const [mode, setMode] = useState<PaletteMode>("light");
    const toggleColorMode = () =>{
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
    }
       
    // const modifiedTheme = useMemo(
    //     () =>
    //         createTheme({
    //             ...theme,
    //             palette: {
    //                 ...theme.palette,
    //                 mode,
    //             }
    //         }),
    //     [mode]
    // );
    
    const modifiedTheme = useMemo(
      () => createTheme(getDesignTokens(mode)),
      [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};