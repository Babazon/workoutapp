import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { connect, useSelector } from 'react-redux';
import { CustomisedExercise } from '../domain/models/CustomisedExercise.model';
import { RootState, setExerciseCompleted, setTrainingPlan, useAppDispatch } from '../domain/state/Redux';
import { WorkoutSession } from '../domain/models/WorkoutSession.model';

const connector = connect();

const ItemList = () => {
  const todayIndex = 0;
  const items = useSelector((state: RootState) => state.workout.trainingPlan?.workoutSessions.find((workoutSession: WorkoutSession)=> workoutSession.day === todayIndex))?.exercises;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!items?.length) {
      dispatch(
        setTrainingPlan({
          assignee: {
            birthdate: '1.2.3',
            firstname: 'Bas',
            id: '1234',
            images: [],
            lastname: 'Yuksel',
            startWeight: 100
          },
          assigner: {
            id: '5676',
            image: '',
            name: 'Jessica'
          },
          workoutSessions: [{
            day: 0,
            exercises: [{
              completed: false,
              description: 'just do it',
              id: '123',
              images: [],
              name: 'pushups',
              videos: []
            }, {
              completed: false,
              description: 'just do it',
              id: '3345',
              images: [],
              name: 'situps',
              videos: []
            }]
          }]
        })
      );
    }
  }, [dispatch, items]);

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
              dispatch(setExerciseCompleted(item));
              navigation.navigate('Detail');
            }}
            style={styles.listItem}
          >
            <Text numberOfLines={1} style={styles.text}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        data={items}
      />
    </View>
  );
};

export default connector(ItemList);

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
