import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../domain/state/Redux";
import React from 'react';
import ExerciseList from "../pages/ExerciseList";
import ExerciseDetail from "../pages/ExerciseDetail";

const StackNavigator = createStackNavigator();


export const Navigator = () => {
  return (
    <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <StackNavigator.Navigator initialRouteName="List">
      <StackNavigator.Screen
        name="List"
        component={ExerciseList}
        options={{
          title: 'Today\'s Exercises', ...sharedHeaderOptions}}
      />
      <StackNavigator.Screen
        name="Detail"
        component={ExerciseDetail}
        options={{
          title: useSelector((state: RootState) => state.workout.selectedExercise?.name),
          ...sharedHeaderOptions,
        }}
      />
    </StackNavigator.Navigator>
  </NavigationContainer>
  )
}

const sharedHeaderOptions: Partial<StackNavigationOptions> = {
  headerBackTitle: 'Back',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: 'lightgreen',
  },
};