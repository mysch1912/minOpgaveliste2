// Importerer Text til tekst og View til at samle elementerne på siden
import { Text, View } from 'react-native';

// Importerer den genanvendelige ButtonComponent
import ButtonComponent from '../components/BottomComponent';

// Henter styling fra GlobalStyle-filen
import { GlobalStyle } from '../styles/GlobalStyle';

// Opretter MyProfile, som er appens profilside
export default function MyProfile({ navigation }) {
  return (
    // Samler indholdet på profilsiden og tilføjer container-styling
    <View style={GlobalStyle.container}>

      {/* Viser sidens overskrift */}
      <Text style={GlobalStyle.title}>Min profil</Text>

      {/* Viser brugerens navn */}
      <Text style={GlobalStyle.text}>Navn: Bruger</Text>

      {/* Viser antallet af opgaver */}
      <Text style={GlobalStyle.text}>Antal opgaver: 3</Text>

      {/* Knap der navigerer tilbage til forsiden */}
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