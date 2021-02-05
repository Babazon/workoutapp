import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppDispatch } from '../domain/state/redux';
import { useSelector } from 'react-redux';
import { getSelectedDayIndex, getSelectedWeekIndex, getSelectedYear } from '../domain/state/selectors';
import { connect } from 'react-redux';
import { setSelectedDayIndex, setSelectedYear, setSelectedWeekIndex } from '../domain/state/actions';

const DAYS_OF_THE_WEEK: { index: number, text: string }[] = [
  {
    index: 0,
    text: 'Mon'
  },
  {
    index: 1,
    text: 'Tue'
  },
  {
    index: 2,
    text: 'Wed'
  },
  {
    index: 3,
    text: 'Thu'
  },
  {
    index: 4,
    text: 'Fri'
  },
  {
    index: 5,
    text: 'Sat'
  },
  {
    index: 6,
    text: 'Sun'
  },
]

const DaySelector = () => {
  const dispatch = useAppDispatch();
  const selectedDayIndex = useSelector(getSelectedDayIndex);
  const selectedWeekIndex = useSelector(getSelectedWeekIndex);
  const selectedYear = useSelector(getSelectedYear);
  const selectDay = (dayIndex: number) => dispatch(setSelectedDayIndex(dayIndex));
  const decrementYear = () => dispatch(setSelectedYear(selectedYear - 1));
  const incrementYear = () => dispatch(setSelectedYear(selectedYear + 1));
  const decrementWeek = () => dispatch(setSelectedWeekIndex(selectedWeekIndex - 1));
  const incrementWeek = () => dispatch(setSelectedWeekIndex(selectedWeekIndex + 1));


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
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.chevronButton} onPress={decrementYear}><Text>{'◀️'}</Text></TouchableOpacity>
        <Text style={styles.title}>{selectedYear}</Text>
        <TouchableOpacity style={styles.chevronButton} onPress={incrementYear}><Text>{'▶️'}</Text></TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.chevronButton} onPress={decrementWeek}><Text>{'⏪'}</Text></TouchableOpacity>
        <Text style={styles.title}>Week {selectedWeekIndex}</Text>
        <TouchableOpacity style={styles.chevronButton} onPress={incrementWeek}><Text>{'⏩'}</Text></TouchableOpacity>
      </View>
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
  chevronButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4
  },
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginVertical: 8
  }
})