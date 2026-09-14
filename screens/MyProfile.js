import { Text, View } from 'react-native';

import ButtonComponent from '../components/BottomComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function MyProfile({ navigation }) {
  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Min profil</Text>

      <Text style={GlobalStyle.text}>Navn: Bruger</Text>

      <Text style={GlobalStyle.text}>Antal opgaver: 3</Text>

      <ButtonComponent
        title="Hjem"
        onPress={() => navigation.navigate('Forside')}
        type="primary"
        width={200}
        height={50}
      />
    </View>
  );
}