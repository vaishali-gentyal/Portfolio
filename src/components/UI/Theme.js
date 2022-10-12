import { brown } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize:'1rem'
                }
            }
        }
    },
  typography: {
    fontFamily: "Gemunu Libre,sans-serif",
    fontSize: 14,
    htmlFontSize: 10,
    h3:{
        fontSize:45,
        color:brown[900]
    },
    h4: {
      color: brown[900],
      textAlign: "justify",
      fontSize: 25,
    },
    h1: {
      color: brown[900],
      fontSize: 60,
      fontWeight: "bold",
    },
    h5: {
      color: brown[900],
      fontSize: 20,
    },
    h6: {
        color: brown[900],
        fontSize: 18,
        textAlign: "justify",
      },
  },
  palette: {
    primary: {
      light: brown.A200,
      dark: brown.A400,
      main: brown.A700,
      // darkLightL:'#8C5B65',
      // lightDark:'#D4A7B0'
    },
    secondary: {
      main: brown[800],
      dark: brown[600],
    },
    lightColor: {
      main: brown[100],
      dark: brown[200],
      light: brown[50],
      contrastText: brown[900],
    },
  },
});
