import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { RootState } from '../domain/state/Redux';
import { getAvatarEmoji } from '../util/getAvatarEmoji';

const connector = connect();

const ItemDetail = () => {
  const selectedItem = useSelector((state: RootState) => {
    return state.auth.user;
  });
  if (!selectedItem) {
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
        >{`${selectedItem.id} ${selectedItem.firstname}`}</Text>
      </View>
      <View>
        <Text style={styles.header}> </Text>
      </View>
    </ScrollView>
  );
};

export default connector(ItemDetail);

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
