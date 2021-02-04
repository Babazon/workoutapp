import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './domain/state/redux';
import { Navigator } from './navigation/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView mode="padding" style={{ flex: 1 }}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
