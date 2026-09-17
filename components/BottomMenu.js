// Importerer View, som bruges til at samle elementerne i menuen
import { View } from 'react-native';

// Importerer den genanvendelige ButtonComponent
import ButtonComponent from './BottomComponent';

// Opretter BottomMenu, som indeholder knapperne til navigation mellem appens screens
export default function BottomMenu({ navigation }) {
  return (
    <View>
      {/* Knap der navigerer til forsiden */}
      <ButtonComponent
        title="Hjem"
        onPress={() => navigation.navigate('Forside')}
        type="primary"
        width={200}
        height={50}
      />

      {/* Knap der navigerer til opgavelisten */}
      <ButtonComponent
        title="Opgaver"
        onPress={() => navigation.navigate('Opgaver')}
        type="secondary"
        width={200}
        height={50}
      />

      {/* Knap der navigerer til profilsiden */}
      <ButtonComponent
        title="Profil"
        onPress={() => navigation.navigate('Profil')}
        type="secondary"
        width={200}
        height={50}
      />

      {/* Knap der navigerer til siden med information om appen */}
      <ButtonComponent
        title="Om"
        onPress={() => navigation.navigate('Om')}
        type="secondary"
        width={200}
        height={50}
      />
    </View>
  );
}