import React, {useCallback} from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

const data = Array(1000)
  .fill(null)
  .map((_, index) => ({
    id: index,
    value: 'Hello item ' + index,
  }));

const ITEM_HEIGHT = 200;

function App() {
  const renderItem = useCallback(({item}) => {
    console.log(item.id);
    return (
      <View style={styles.itemContainer}>
        <Text>{item.value}</Text>
      </View>
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={ITEM_HEIGHT}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  itemContainer: {
    height: ITEM_HEIGHT,
  },
});

export default App;
