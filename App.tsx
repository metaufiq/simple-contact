import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import routes from './src/routes';
import store from './src/store';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>

          {routes.stack.map((route, index) => (
            <Stack.Screen
              name={route.name}
              component={route.component}
              options={{
                headerShown: false,
              }}
              key={index}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
