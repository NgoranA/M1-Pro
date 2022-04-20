import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/ui-theme/theme";
import createEmotionCache from "../src/createEmotionCache";
import { SessionProvider } from "next-auth/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ChangeColorContext = React.createContext({ toggleColorMode: () => {} });

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ChangeColorContext.Provider value={colorMode}>
        <ThemeProvider theme={colorTheme}>
          <ThemeProvider
            theme={() =>
              createTheme({
                ...theme,
                palette: {
                  ...colorTheme.palette,
                },
              })
            }
          >
            <CssBaseline />
            <Component {...pageProps} changeColorContext={ChangeColorContext} />
          </ThemeProvider>
        </ThemeProvider>
      </ChangeColorContext.Provider>
    </CacheProvider>
  );
}
