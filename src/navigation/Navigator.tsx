import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Button, Alert } from "react-native";
import { useSelector } from "react-redux";
import React from 'react';
import ExerciseList from "../pages/ExerciseList";
import ExerciseDetail from "../pages/ExerciseDetail";
import Auth from "../pages/Auth";
import { getExerciseTitle, getLoggedIn, workoutSessionActive } from "../domain/state/selectors";
import { useAppDispatch } from "../domain/state/redux";
import { startWorkoutSession, stopWorkoutSession } from "../domain/state/actions";

const StackNavigator = createStackNavigator();


export const Navigator = () => {
  const exerciseTitle = useSelector(getExerciseTitle);
  const loggedIn = useSelector(getLoggedIn);
  const sessionActive = useSelector(workoutSessionActive);
  const dispatch = useAppDispatch();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {loggedIn && (
        <StackNavigator.Navigator initialRouteName="List">
          <StackNavigator.Screen
            name="List"
            component={ExerciseList}
            options={{
              title: 'Workout Session',
              ...sharedHeaderOptions,
              headerRight: () => (
                <Button
                  onPress={() => sessionActive
                    ? Alert.alert('Stop Session?', 'Are you sure that you want to stop the workout session?', [{ style: 'cancel', onPress: () => {/* */ }, text: 'Cancel' }, { style: 'default', onPress: () => dispatch(stopWorkoutSession()), text: 'Stop' }])
                    : Alert.alert('Start Session?', 'Are you sure that you want to start the workout session?', [{ style: 'cancel', onPress: () => {/* */ }, text: 'Cancel' }, { style: 'default', onPress: () => dispatch(startWorkoutSession()), text: 'Start' }])}
                  title={sessionActive ? 'Stop Session' : 'Start Session'}
                  color={sessionActive ? 'red' : 'black'}
                />
              ),
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