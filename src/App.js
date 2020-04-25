import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';

import Button from './Button';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { dark, light } from './theme';
import { useTheme } from './useTheme';

import './App.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${props => props.theme.colors.bgColor};
    color: ${props => props.theme.colors.titleColor};
  }
`;

const Div = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {

  const [ themeMode, toggleTheme ] = useTheme();
  const theme = themeMode === 'light' ? light : dark;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Button
            title={theme === light ? 'Light Mode' : 'Dark Mode'}
            click={toggleTheme}
          ></Button>
          <Div>
            <Header theme={theme} />
            <Navbar theme={theme} />
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={() => <Dashboard theme={theme} />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;