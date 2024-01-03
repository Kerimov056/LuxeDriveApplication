import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./AppNavigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from './Redux/store';
import BottomTabNavigator from './BottomTabNavigator';

const queryClinet = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClinet} >
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        {/* <BottomTabNavigator /> */}
      </Provider>
    </QueryClientProvider>
  );
}

