import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Pantallas/Home'
import Tareas from './Pantallas/Tareas';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Tareas: {screen: Tareas},
});

const App = createAppContainer(MainNavigator);

export default App;
