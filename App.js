// Importerer NavigationContainer, som bruges til at håndtere navigationen i appen
import { NavigationContainer } from '@react-navigation/native';

// Importerer funktionen til at oprette navigation mellem de forskellige screens
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importerer appens forskellige screens
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import AboutScreen from './screens/AboutScreen';
import MyProfile from './screens/MyProfile';

// Opretter en Stack, som bruges til navigation mellem appens screens
const Stack = createNativeStackNavigator();

// App er hovedkomponenten, hvor navigationen i applikationen samles
export default function App() {
  return (
    // NavigationContainer omslutter appens navigation
    <NavigationContainer>

      {/* Indeholder de forskellige screens, som brugeren kan navigere mellem */}
      <Stack.Navigator>

        {/* Forsiden bruger HomeScreen */}
        <Stack.Screen name="Forside" component={HomeScreen} />

        {/* Opgavesiden bruger ListScreen */}
        <Stack.Screen name="Opgaver" component={ListScreen} />

        {/* Om-siden bruger AboutScreen */}
        <Stack.Screen name="Om" component={AboutScreen} />

        {/* Profilsiden bruger MyProfile */}
        <Stack.Screen name="Profil" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}