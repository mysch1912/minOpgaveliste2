import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import AboutScreen from './screens/AboutScreen';
import MyProfile from './screens/MyProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Forside" component={HomeScreen} />
        <Stack.Screen name="Opgaver" component={ListScreen} />
        <Stack.Screen name="Om" component={AboutScreen} />
        <Stack.Screen name="Profil" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}