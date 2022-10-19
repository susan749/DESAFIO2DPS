import React from 'react';
import Ejercicio01 from './screen/Ejercicio01';
import Ejercicio02 from './screen/Ejercicio02';
import Ejercicio03 from './screen/Ejercicio03';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Ejercicio01" component={Ejercicio01} options={{
                title: 'ejercicio01', tabBarIcon: () => (
                    <Icon
                        name='calculator-outline'
                        type='ionicon'
                        color='#517fa4'
                    />
                ), 
            }} />
            <Tab.Screen name="Ejercicio02" component={Ejercicio02} options={{ title: 'ejercicio02',tabBarIcon: () => (
                    <Icon
                        name='cash-outline'
                        type='ionicon'
                        color='#517fa4'
                    />
                ),
             }} />
            <Tab.Screen name="Ejercicio03" component={Ejercicio03} options={{ title: 'ejercicio03', tabBarIcon: () => (
                    <Icon
                        name='shirt-outline'
                        type='ionicon'
                        color='#517fa4'
                    />
                ),
             }} />
        </Tab.Navigator>
    );
}
