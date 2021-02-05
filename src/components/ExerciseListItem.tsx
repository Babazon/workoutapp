import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { CustomisedExercise } from '../domain/models/CustomisedExercise.model';
import { useAppDispatch } from '../domain/state/redux';
import { useNavigation } from '@react-navigation/native';
import { setExerciseIncomplete, setExerciseCompleted, setSelectedExercise } from '../domain/state/actions';


export const ExerciseListItem = (props: { item: CustomisedExercise }) => {
  const { item } = props;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={item.id}
      onLongPress={() => {
        dispatch(item.completed ? setExerciseIncomplete(item) : setExerciseCompleted(item))
      }}
      onPress={() => {
        dispatch(setSelectedExercise(item));
        navigation.navigate('Detail');
      }}
      style={StyleSheet.flatten([styles.listItem, { backgroundColor: item.completed ? 'gray' : 'green' }])}
    >
      <View style={styles.avatar}>
        <Image source={{ uri: item.images[0] ?? '' }} style={styles.avatarIcon} />
      </View>
      <View style={styles.content}>
        <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, { fontStyle: item.completed ? 'italic' : 'normal' }])}>
          Exercise: {item.name}
        </Text>
        <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, { fontStyle: item.completed ? 'italic' : 'normal' }])}>
          Desription: {item.description}
        </Text>
        <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, { fontStyle: item.completed ? 'italic' : 'normal' }])}>
          Amount: {item.reps ?? `${item.duration} min`}
        </Text>
        <Text numberOfLines={1} style={StyleSheet.flatten([styles.text, { fontStyle: item.completed ? 'italic' : 'normal' }])}>
          Status:  {item.completed ? 'Completed' : 'Incomplete'}
        </Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  avatar: {
    flex: 1 / 5
  },
  avatarIcon: {
    height: 75,
    width: 75,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    flex: 4 / 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    padding: 4,
  },
  contentContainerStyle: {
    flex: 1
  },
  flatlist: {
    flex: 1
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 75,
    justifyContent: 'flex-start',
    margin: 2
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left'
  },
  wrapper: {
    alignItems: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});
