import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './src/navigation';
import {store, persistor} from './src/redux/store/index';

// const Store = store();

const App: React.FC = (props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
