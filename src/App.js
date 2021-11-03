import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from './ThemeOptions';
import { Box } from '@mui/system';
import TopContent from './Components/TopContent';
import Featured from './Components/Featured';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Header/>
      <TopContent/>
      <Featured/>
    </ThemeProvider>
  );
}

export default App;
