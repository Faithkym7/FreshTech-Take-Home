import {createTheme} from '@mui/material/styles';

export const shades = {
    
    indigo: {
          100: "#cccce6",
          200: "#9999cc",
          300: "#6666b3",
          400: "#333399",
          500: "#000080",
          600: "#000066",
          700: "#00004d",
          800: "#000033",
          900: "#00001a"
    },
    blue: {
          100: "#d9e1f8",
          200: "#b4c3f1",
          300: "#8ea6e9",
          400: "#6988e2",
          500: "#436adb",
          600: "#3655af",
          700: "#284083",
          800: "#1b2a58",
          900: "#0d152c"
    },
    grey: {
          100: "#fcfdfe",
          200: "#f9fafd",
          300: "#f5f8fd",
          400: "#f2f5fc",
          500: "#eff3fb",
          600: "#bfc2c9",
          700: "#8f9297",
          800: "#606164",
          900: "#303132"
    },


};

export const theme = createTheme({
    palette: {
        primary:{
            main: shades.blue[500],
            light: shades.blue[100],
            dark: shades.blue[900]
        },
        secondary:{
            main: shades.grey[500],
            light: shades.grey[100],
            dark: shades.grey[900]
        },
    },
    typography:{
        fontFamily: ['poppins'],
        fontSize: 14,
        fontWeight: 400,

        h1: {
            fontFamily: ['poppins'],
            fontSize: 48,
            fontWeight: 400,
            [`@media (min-width: 576px)`]: {
              fontSize: 56,
            },
            [`@media (min-width: 768px)`]: {
              fontSize: 64,
            },
            [`@media (min-width: 992px)`]: {
              fontSize: 72,
            },
            [`@media (min-width: 1200px)`]: {
              fontSize: 80,
            },
          },
          h2: {
            fontFamily: ['poppins'],
            fontSize: 40,
            fontWeight: 400,
            [`@media (min-width: 576px)`]: {
              fontSize: 44,
            },
            [`@media (min-width: 768px)`]: {
              fontSize: 48,
            },
            [`@media (min-width: 992px)`]: {
              fontSize: 52,
            },
            [`@media (min-width: 1200px)`]: {
              fontSize: 56,
            },
          },
          h3: {
            fontFamily: ['poppins'],
            fontSize: 32,
            fontWeight: 400,
            [`@media (min-width: 576px)`]: {
              fontSize: 36,
            },
            [`@media (min-width: 768px)`]: {
              fontSize: 40,
            },
            [`@media (min-width: 992px)`]: {
              fontSize: 44,
            },
            [`@media (min-width: 1200px)`]: {
              fontSize: 48,
            },
          },
          h4: {
            fontFamily: ['poppins'],
            fontSize: 28,
            fontWeight: 400,
            [`@media (min-width: 576px)`]: {
              fontSize: 32,
            },
            [`@media (min-width: 768px)`]: {
              fontSize: 36,
            },
            [`@media (min-width: 992px)`]: {
              fontSize: 40,
            },
            [`@media (min-width: 1200px)`]: {
              fontSize: 44,
            },
          },
          h5: {
            fontFamily: ['poppins'],
            fontSize: 24,
            fontWeight: 400,
            [`@media (min-width: 576px)`]: {
              fontSize: 28,
            },
            [`@media (min-width: 768px)`]: {
              fontSize: 32,
            },
            [`@media (min-width: 992px)`]: {
              fontSize: 36,
            },
            [`@media (min-width: 1200px)`]: {
              fontSize: 40,
            },
          },
          h6: {
            fontFamily: ['poppins'],
            fontSize: 20,
            fontWeight: 400,
            [`@media (min-width: 576px)`]: {
              fontSize: 24,
            },
            [`@media (min-width: 768px)`]: {
              fontSize: 28,
            },
            [`@media (min-width: 992px)`]: {
              fontSize: 32,
            },
            [`@media (min-width: 1200px)`]: {
              fontSize: 36,
            },
          },
    }
})