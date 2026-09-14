import { FlatList, Text, View } from 'react-native';

import ButtonComponent from '../components/BottomComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function ListScreen({ navigation }) {
  const tasks = [
    { id: '1', title: 'Læs kapitel 4' },
    { id: '2', title: 'Lav programmeringsopgave' },
    { id: '3', title: 'Køb ind' },
  ];

  return (
    <View style={GlobalStyle.listContainer}>
      <Text style={GlobalStyle.title}>Mine opgaver</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={GlobalStyle.itemContainer}>
            <Text style={GlobalStyle.itemText}>{item.title}</Text>
          </View>
        )}
      />

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