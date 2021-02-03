import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {connect, useDispatch, useSelector} from 'react-redux';
import {loadItems, RootState, selectItem} from '../state/Redux';
import {Item} from '../state/Item.model';

const connector = connect();

const ItemList = () => {
  const items = useSelector((state: RootState) => state.items) ?? [];
  const dispatch = useDispatch();
  useEffect(() => {
    if (items.length === 0) {
      dispatch(
        loadItems([
          {id: '1', label: 'One', addresses: ['Munich', 'Berlin']},
          {id: '2', label: 'Two', addresses: ['Copenhagen', 'Stockholm']},
        ] as Item[]),
      );
    }
  }, [dispatch, items]);

  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item: {id: string}) => item.id}
        renderItem={({item}: {item: Item}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              dispatch(selectItem(item));
              navigation.navigate('Detail');
            }}
            style={styles.listItem}>
            <Text numberOfLines={1} style={styles.text}>
              {item.label}
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
