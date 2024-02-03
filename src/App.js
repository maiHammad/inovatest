import logo from './logo.svg';
import './App.css';
import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Ebook from './components/pages/e-book';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="App">
      <>
      <Header/>
       <Ebook/>
      <Footer/>
      </>

    </div>
     </ThemeProvider>

  );
}

export default App;
