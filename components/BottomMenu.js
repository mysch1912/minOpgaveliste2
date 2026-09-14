import { View } from 'react-native';

import ButtonComponent from './BottomComponent';

export default function BottomMenu({ navigation }) {
  return (
    <View>
      <ButtonComponent
        title="Hjem"
        onPress={() => navigation.navigate('Forside')}
        type="primary"
        width={200}
        height={50}
      />

      <ButtonComponent
        title="Opgaver"
        onPress={() => navigation.navigate('Opgaver')}
        type="secondary"
        width={200}
        height={50}
      />

      <ButtonComponent
        title="Profil"
        onPress={() => navigation.navigate('Profil')}
        type="secondary"
        width={200}
        height={50}
      />

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