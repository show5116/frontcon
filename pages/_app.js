import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import wrapper from "../store/configureStore";
import * as S from '../styles/pages/app.style';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import style from '../styles/style.css';

const MyApp = ({ Component, pageProps }) => {

    const themeState = useSelector((state) => state.themeReducer);

    return (
      <>
          <ThemeProvider theme={themeState.theme}>
              <S.Container>
                  <Header />
                  <Component {...pageProps} />
                  <Footer />
              </S.Container>
          </ThemeProvider>
      </>
    )
}

export default wrapper.withRedux(MyApp);
