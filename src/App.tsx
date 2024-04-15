import {FC} from 'react';
import ReelScreen from './screens/reel-screen/reel-screen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ReelScreen />
    </Provider>
  );
};

export default App;
