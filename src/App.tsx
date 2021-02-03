import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './domain/state/Redux';
import { Navigator } from './navigation/Navigator';


const App = ()=> {
    return (
      <Provider store={store}>
          <Navigator/>
      </Provider>
    );
}



export default App;
