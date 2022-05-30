import {GlobalStyle} from "../styles/GlobalStyle";
import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import wrapper from "../store/configureStore";

const MyApp = ({ Component, pageProps }) => {

    const themeState = useSelector((state) => state.themeReducer);

    return (
      <>
          <GlobalStyle />
          <ThemeProvider theme={themeState.theme}>
              <Component {...pageProps} />
          </ThemeProvider>
      </>
    )
}

export default wrapper.withRedux(MyApp);
