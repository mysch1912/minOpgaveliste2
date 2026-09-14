import { Text, View, ImageBackground } from 'react-native';

import BottomMenu from '../components/BottomMenu';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/background.webp')}
      style={GlobalStyle.background}
      resizeMode="cover"
    >
      <View style={GlobalStyle.container}>
        <Text style={GlobalStyle.title}>Min Opgaveliste</Text>

        <Text style={GlobalStyle.text}>
          En simpel app til at holde styr på opgaver.
        </Text>

        <BottomMenu navigation={navigation} />
      </View>
    </ImageBackground>
  );
}