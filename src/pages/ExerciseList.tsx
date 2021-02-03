import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextStyle } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { connect, useSelector } from 'react-redux';
import { CustomisedExercise } from '../domain/models/CustomisedExercise.model';
import { RootState, useAppDispatch, setSelectedExercise } from '../domain/state/Redux';
import { Exercise } from '../domain/models/Exercise.model';

const connector = connect();

const ExerciseList = () => {
  const items = useSelector((state: RootState) => state.workout.trainingPlan?.workoutSessions[0].exercises)
  const dispatch = useAppDispatch();
  const navigation = useNavigation();


  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: { id: string }) => item.id}
        renderItem={({ item }: { item: CustomisedExercise }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              dispatch(setSelectedExercise(item));
              navigation.navigate('Detail');
            }}
            style={StyleSheet.flatten([styles.listItem, {opacity: item.completed ? 0.5 : 1}])}
          >
            <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, {fontStyle: item.completed  ? 'italic': 'normal'} as TextStyle])}>
              {item.reps ?? `${item.duration} min`} {item.name}
            </Text>
          </TouchableOpacity>
        )}
        data={items}
      />
    </View>
  );
};

export default connector(ExerciseList);

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
  },
  listItem: {
    alignItems: 'center',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 100,
    justifyContent: 'center',
    margin: 2,
    padding: 4,
    backgroundColor: 'lightblue',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontSize: 50,
    marginHorizontal: 8,
  },
  wrapper: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'flex-start',
  },
});
