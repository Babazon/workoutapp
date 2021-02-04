import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import React from 'react';
import ExerciseList from "../pages/ExerciseList";
import ExerciseDetail from "../pages/ExerciseDetail";
import Auth from "../pages/Auth";
import { getExerciseTitle, getLoggedIn } from "../domain/state/selectors";

const StackNavigator = createStackNavigator();


export const Navigator = () => {
  const exerciseTitle = useSelector(getExerciseTitle);
  const loggedIn = useSelector(getLoggedIn);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {loggedIn && (
        <StackNavigator.Navigator initialRouteName="List">
          <StackNavigator.Screen
            name="List"
            component={ExerciseList}
            options={{
              title: 'Today\'s Exercises', ...sharedHeaderOptions
            }}
          />
          <StackNavigator.Screen
            name="Detail"
            component={ExerciseDetail}
            options={{
              title: exerciseTitle,
              ...sharedHeaderOptions,
            }}
          />
        </StackNavigator.Navigator>
      )}
      {!loggedIn && <Auth />}
    </NavigationContainer>
  )
}

const sharedHeaderOptions: Partial<StackNavigationOptions> = {
  headerBackTitle: 'Back',
  headerTintColor: 'lightgreen',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: 'white',
  },
};