// Importerer Text til tekst og View til at samle elementerne på siden
import { Text, View } from 'react-native';

// Importerer den genanvendelige ButtonComponent
import ButtonComponent from '../components/BottomComponent';

// Henter styling fra GlobalStyle-filen
import { GlobalStyle } from '../styles/GlobalStyle';

// Opretter AboutScreen, som er siden med information om appen
export default function AboutScreen({ navigation }) {
  return (
    // Bruger container-styling til hele siden
    <View style={GlobalStyle.container}>

      {/* Viser sidens overskrift */}
      <Text style={GlobalStyle.title}>Om appen</Text>

      {/* Viser en kort beskrivelse af appen */}
      <Text style={GlobalStyle.text}>
        Min Opgaveliste er en simpel app, der hjælper brugeren med at få overblik over sine opgaver.
      </Text>

      {/* Knap der navigerer tilbage til forsiden */}
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