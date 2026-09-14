import { Text, View } from 'react-native';

import ButtonComponent from '../components/BottomComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function AboutScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Om appen</Text>

      <Text style={GlobalStyle.text}>
        Min Opgaveliste er en simpel app, der hjælper brugeren med at få overblik over sine opgaver.
      </Text>

      <ButtonComponent
        title="Tilbage til forsiden"
        onPress={() => navigation.navigate('Forside')}
        type="primary"
        width={200}
        height={50}
      />
    </View>
  );
}