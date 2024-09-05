import React from 'react';
import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { PeriodList } from './ui/pages/periods/components/PeriodList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './ui/router';
import { theme } from './ui/theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={createBrowserRouter(router)} />
    </ChakraProvider>
  );
}

export default App;
