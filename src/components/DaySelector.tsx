import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppDispatch } from '../domain/state/redux';
import { useSelector } from 'react-redux';
import { getSelectedDayIndex } from '../domain/state/selectors';
import { connect } from 'react-redux';
import { setSelectedDayIndex } from '../domain/state/actions';

const DAYS_OF_THE_WEEK: { index: number, text: string }[] = [
  {
    index: 0,
    text: 'Sun'
  },
  {
    index: 1,
    text: 'Mon'
  },
  {
    index: 2,
    text: 'Tue'
  },
  {
    index: 3,
    text: 'Wed'
  },
  {
    index: 4,
    text: 'Thu'
  },
  {
    index: 5,
    text: 'Fri'
  },
  {
    index: 6,
    text: 'Sat'
  },
]

const DaySelector = () => {
  const dispatch = useAppDispatch();
  const selectedDayIndex = useSelector(getSelectedDayIndex);
  const selectDay = (dayIndex: number) => dispatch(setSelectedDayIndex(dayIndex));
  const getButtonColor = (dayIndex: number, selectedIndex: number) => {
    if (dayIndex === selectedIndex) {
      return 'lightgreen';
    }
    if (!(dayIndex % 2)) {
      return 'white';
    }
    return 'lightgray';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Week's Exercises</Text>
      <View style={styles.daysWrapper}>
        {DAYS_OF_THE_WEEK.map((day: { index: number, text: string }) => (
          <TouchableOpacity
            key={day.text}
            onPress={() => selectDay(day.index)}
            style={StyleSheet.flatten([styles.dayItem, { backgroundColor: getButtonColor(day.index, selectedDayIndex) }])}>
            <Text style={StyleSheet.flatten([styles.dayText, { fontWeight: day.index === selectedDayIndex ? 'bold' : 'normal' }])}>{day.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default connect()(DaySelector);

const styles = StyleSheet.create({
  daysWrapper: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  dayItem: {
    flex: 1 / 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginVertical: 8
  }
})