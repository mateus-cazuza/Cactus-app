import React from 'react';
import 'react-native-gesture-handler'
import { Text, View, StyleSheet } from 'react-native';

import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import Main from './src/pages/Main'
import About from './src/pages/About'

const Stack = createSharedElementStackNavigator();


export default function({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main" screenOptions={{headerShown:false}}>
        <Stack.Screen component={Main} name="Main"/>
        <Stack.Screen component={About} name="About"
        options={navigation => ({
          headerBackTitle: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return{
              cardStyle: {
                opacity: progress
              }
            }
          }
        })}
        sharedElementsConfig = {(route) => {
          const {data} = route.params
          return [
            {
              id:`item.${data.id}.img`,
              animation: 'fade-in',
              resize: "auto"
            },
            {
              id:`item.${data.id}.name`,
              animation: 'fade-in',
              resize: 'clip',
            },
            // {
            //   id:`item.${data.id}.boxCactus`,
            //   animation: 'fade-out',
            //   resize: 'auto',
            // },
            {
              id:`itemTitle`,
              animation: 'fade-in',
              resize: 'auto',
            },
            {
              id:`itemInput`,
              animation: 'fade-in',
            },
          ]
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}