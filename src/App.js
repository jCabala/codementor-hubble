import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import BodySection from './components/BodySection';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import theme from './components/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <BodySection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
