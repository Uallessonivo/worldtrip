import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    color: {
        gray: {
            "900": "#121b23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2",
        },
        yellow: {
            "100": "#FFBA08",
            "50": "#fac743"
        },
        dark: {
            '50': '#000000',
            '100': '#47585B',
            '200': '#999999',
            '250': '#b5b5b5',
        },
        light: {
            "50": "#FFFFFF",
            '100': '#F5F8FA',
            '150': '#DADADA',
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.50'
            }
        }
    }
})