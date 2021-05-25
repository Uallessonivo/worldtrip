Template de projeto com Next js e Chakra-ui

## Criar projeto next

- yarn create next-app nomedoprojeto

## Acessar projeto

- cd nomedoprojeto
- code .

## Config do ambiente

- apagar a pasta style
- criar pasta src e mover a pages para dentro dela
- alterar as extensões para .tsx
- apagar a pasta da api
- criar pasta de components
- apagar conteúdo da public
- apagar imports dentro do app e do index
- tipar o app importando o AppProps de dentro do next
- limpar o index para retornar no máximo um hello world

## Instalar typescript

- yarn add typescript @types/react @types/node -D
- iniciar o projeto com yarn dev para config da env e tsconfig do next

## Instalar o Chakra-ui

- yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion
- criar na pasta styles o theme.ts para configurar o chakra

## Dentro do Theme.ts

- Configure o ambiente de acordo o projeto

- Modelo de config 
```
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
        }
    },
    fonts: {
        heading: 'Roboto', // Procurar a font no google.fonts e importar na document
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})
```

## Dentro do _app.tsx

- import {ChakraProvider} from '@chakra-ui/react'
- Passar o ChakraProvider por volta de todo retorno do app
- Passar nas props do ChakraProvider o tema com theme={theme} - importar o theme.ts

## Criar o _document.tsx

- Modelo de document

```
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" /> // Importação da font
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```
