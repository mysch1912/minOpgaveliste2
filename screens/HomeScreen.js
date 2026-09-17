// Importerer Text, View og ImageBackground fra React Native
import { Text, View, ImageBackground } from 'react-native';

// Importerer BottomMenu, som bruges til navigation på forsiden
import BottomMenu from '../components/BottomMenu';

// Henter styling fra GlobalStyle-filen
import { GlobalStyle } from '../styles/GlobalStyle';

// Opretter HomeScreen, som er appens forside
export default function HomeScreen({ navigation }) {
  return (
    // Tilføjer et baggrundsbillede til forsiden
    <ImageBackground
      source={require('../assets/background.webp')}
      style={GlobalStyle.background}
      resizeMode="cover"
    >
      {/* Samler indholdet på forsiden og tilføjer container-styling */}
      <View style={GlobalStyle.container}>

        {/* Viser appens titel */}
        <Text style={GlobalStyle.title}>Min Opgaveliste</Text>

        {/* Viser en kort beskrivelse under titlen */}
        <Text style={GlobalStyle.text}>
          En simpel app til at holde styr på opgaver.
        </Text>

        {/* Viser menuen med knapper til de forskellige screens */}
        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}