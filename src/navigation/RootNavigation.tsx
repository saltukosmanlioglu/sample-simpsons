import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Create from 'pages/simpsons/create'
import Detail from 'pages/simpsons/detail'
import List from 'pages/simpsons/list'
import { navigate } from './index'

import { RootStackParamList } from './types'

const Stack = createStackNavigator<RootStackParamList>()
const INITIAL_ROUTE_NAME = "List"

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}
