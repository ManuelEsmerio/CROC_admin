import { orange, pink, teal, yellow } from "@mui/material/colors";

const darkTheme = {
    palette: {
        mode: 'dark',
        primary: {
            main: pink[900]
        },
        secondary: {
            main: orange[800]
        }
    }
}


const lightTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: teal[500]
        },
        secondary: {
            main: yellow[800]
        }
    }
}

export const getDesignTokens = (mode) => {
    switch (mode) {
        case 'dark':
            return darkTheme;
        case 'light':
            return lightTheme;
        default:
            return lightTheme;
    }
};
