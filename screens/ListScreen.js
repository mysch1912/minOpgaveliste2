// Importerer FlatList til opgavelisten samt Text og View fra React Native
import { FlatList, Text, View } from 'react-native';

// Importerer den genanvendelige ButtonComponent
import ButtonComponent from '../components/BottomComponent';

// Henter styling fra GlobalStyle-filen
import { GlobalStyle } from '../styles/GlobalStyle';

// Opretter ListScreen, som viser brugerens opgaver
export default function ListScreen({ navigation }) {

  // Opretter de opgaver, som skal vises i listen
  const tasks = [
    { id: '1', title: 'Læs kapitel 4' },
    { id: '2', title: 'Lav programmeringsopgave' },
    { id: '3', title: 'Køb ind' },
  ];

  return (
    // Samler indholdet på siden og tilføjer styling
    <View style={GlobalStyle.listContainer}>

      {/* Viser sidens overskrift */}
      <Text style={GlobalStyle.title}>Mine opgaver</Text>

      {/* Viser opgaverne fra tasks som en liste */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={GlobalStyle.itemContainer}>
            <Text style={GlobalStyle.itemText}>{item.title}</Text>
          </View>
        )}
      />

      {/* Knap der navigerer til siden "Om appen" */}
      <ButtonComponent
        title="Om appen"
        onPress={() => navigation.navigate('Om')}
        type="secondary"
        width={200}
        height={50}
      />
    </View>
  );
}