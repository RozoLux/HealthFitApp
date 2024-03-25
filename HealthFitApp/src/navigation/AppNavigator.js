import React from 'react' ;
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import screens
import Subscription from '../screens/Login/subscription';
import Location from '../screens/Login/location';
import Goals from '../screens/Login/location';

const Stack = createStackNavigator() ;

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name ="Subscription" component={Subscription}/>
            <Stack.Screen name ="Location" component={Location}/>
            <Stack.Screen name ="Goals" component={Goals}/>            
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator;