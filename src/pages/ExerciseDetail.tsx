import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { RootState, useAppDispatch, setExerciseCompleted, setExerciseIncomplete } from '../domain/state/Redux';
import { getAvatarEmoji } from '../util/getAvatarEmoji';
import { TouchableOpacity } from 'react-native-gesture-handler';

const connector = connect();

const ExerciseDetail = () => {
  const selectedExercise = useSelector((state: RootState) =>  state.workout.selectedExercise);
  const trainer = useSelector((state: RootState)=> state.workout.trainingPlan?.assigner);
  const dispatch = useAppDispatch();

  if (!selectedExercise) {
    return <></>;
  }

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.avatarStyle}>{getAvatarEmoji()}</Text>
      </View>
      <View>
        <Text
          style={styles.header}
        >{`${trainer?.name} assigned you`} {selectedExercise.reps ?? `${selectedExercise.duration} minutes of`} {selectedExercise.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>{
          dispatch(selectedExercise.completed ? setExerciseIncomplete(selectedExercise): setExerciseCompleted(selectedExercise))
        }}>
        <Text style={styles.header}>Set exercise {selectedExercise.completed ? 'incomplete': 'complete'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default connector(ExerciseDetail);

const styles = StyleSheet.create({
  avatarStyle: {
    fontSize: 250,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    margin: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  text: {
    textAlign: 'center',
  },
  myPineappleIsBiggerThanYours: {
    fontSize: 80,
  },
});
