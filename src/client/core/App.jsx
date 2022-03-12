import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ContextProvider } from '../store/context';
import Template from '../containers/Template';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
 }
  body {
    padding: 0;
    margin: 0;
    background-color: #f6f7fb;
    color: #393d46;
  }
`;

export default function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Template>
        <Routes />
      </Template>
    </ContextProvider>
  );
}
