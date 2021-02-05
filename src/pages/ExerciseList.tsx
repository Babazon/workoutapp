import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextStyle } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { connect, useSelector } from 'react-redux';
import { CustomisedExercise } from '../domain/models/CustomisedExercise.model';
import { setSelectedExercise, setExerciseCompleted, setExerciseIncomplete } from '../domain/state/actions';
import { useAppDispatch } from '../domain/state/redux';
import DaySelector from '../components/DaySelector';
import { getExercisesForSelectedIndex } from '../domain/state/selectors';

const ExerciseList = () => {
  const items = useSelector(getExercisesForSelectedIndex);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <DaySelector />
      {items.length > 0 && (
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item: { id: string }) => item.id}
          renderItem={({ item }: { item: CustomisedExercise }) => (
            <TouchableOpacity
              key={item.id}
              onLongPress={() => {
                dispatch(item.completed ? setExerciseIncomplete(item) : setExerciseCompleted(item))
              }}
              onPress={() => {
                dispatch(setSelectedExercise(item));
                navigation.navigate('Detail');
              }}
              style={StyleSheet.flatten([styles.listItem, { opacity: item.completed ? 0.5 : 1, backgroundColor: item.completed ? 'gray' : 'green' }])}
            >
              <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, { fontStyle: item.completed ? 'italic' : 'normal' } as TextStyle])}>
                {item.reps ?? `${item.duration} min`} {item.name} {item.completed ? '✔️' : '💤'}
              </Text>
            </TouchableOpacity>
          )}
          data={items}
        />)
      }
      {!items.length && <View style={styles.centered}><Text>No exercises for the selected day..</Text></View>}
      {items.length > 0 && (
        <View style={styles.tipWrapper}>
          <Text style={styles.tip}>Tip: Press and hold an exercise to complete it!</Text>
        </View>
      )
      }
    </View>
  );
};

export default connect()(ExerciseList);

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tip: {
    fontStyle: 'italic',
    color: 'lightgray',
    textAlign: 'center'
  },
  tipWrapper: {},
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
    fontSize: 24,
    marginHorizontal: 8,
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'flex-start',
  },
});
