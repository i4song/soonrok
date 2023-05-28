import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let GlobalTheme = createTheme({
    palette: {
        primary: {
            main: '#B6CAC9',
        },
        grey: {
            500: '#6F6F6F',
        },
    },
    typography: {
        h1: {
            color: 'white',
            fontFamily: 'maruburi', 
            fontSize: '2.5rem',
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
            lineHeight: '300%'
        },
        body1: {
            color: 'white',
            fontFamily: 'maruburi', 
            fontSize: '1rem',
            '@media (max-width:600px)': {
                fontSize: '0.8rem',
            },
            lineHeight: '210%'
        },
        body2: {
            color: '#6f6f6f',
            fontFamily: 'maruburi', 
            fontSize: '0.9rem',
            '@media (max-width:600px)': {
                fontSize: '0.7rem',
            },
            lineHeight: '210%'
        }
    },
})

export default GlobalTheme;