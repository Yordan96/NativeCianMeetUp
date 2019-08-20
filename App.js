import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Pantallas/Home'
import Tareas from './Pantallas/Tareas';
import Flex from './Pantallas/Flex';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Tareas: {screen: Tareas},
  Flex: {screen: Flex},
});

const App = createAppContainer(MainNavigator);

export default App;
