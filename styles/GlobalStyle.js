// Importerer StyleSheet, som bruges til at samle appens styling
import { StyleSheet } from 'react-native';

// Opretter GlobalStyle, som indeholder styling til appens forskellige elementer
export const GlobalStyle = StyleSheet.create({

  // Styling til baggrundsbilledet
  background: {

    // Får baggrunden til at fylde den tilgængelige plads
    flex: 1,

    // Sætter bredden til hele skærmens bredde
    width: '100%',

    // Sætter højden til hele skærmens højde
    height: '100%',

  },

  // Generel styling til indholdet på appens screens
  container: {

    flex: 1,

    // Centrerer elementerne vandret
    alignItems: 'center',

    // Centrerer elementerne lodret
    justifyContent: 'center',

    // Tilføjer luft omkring indholdet
    padding: 20,

  },

  // Styling til overskrifter
  title: {

    fontSize: 28,

    fontWeight: 'bold',

    // Tilføjer afstand under overskriften
    marginBottom: 20,

  },

  // Styling til almindelig tekst
  text: {

    fontSize: 16,

    textAlign: 'center',

    marginBottom: 30,

  },

  // Styling til primary-knapper
  primaryBtn: {

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 15,

    // Giver knappen afrundede hjørner
    borderRadius: 8,

    // Farve når knappen trykkes
    pressedColor: '#d1e7ff',

    // Knappens normale farve
    defaultColor: '#4A90E2',

  },

  // Styling til teksten på primary-knapper
  primaryBtnText: {

    color: '#fff',

    fontSize: 16,

  },

  // Styling til secondary-knapper
  secondaryBtn: {

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 15,

    borderRadius: 8,

    // Farve når knappen trykkes
    pressedColor: '#4A90E2',

    // Knappens normale farve
    defaultColor: '#d1e7ff',

  },

  // Styling til teksten på secondary-knapper
  secondaryBtnText: {

    color: '#000',

    fontSize: 16,

  },

  // Styling til siden med opgavelisten
  listContainer: {

    flex: 1,

    backgroundColor: '#fff',

    padding: 20,

  },

  // Styling til hver enkelt opgave i listen
  itemContainer: {

    padding: 15,

    // Tilføjer en kant rundt om opgaven
    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 8,

    // Tilføjer afstand mellem opgaverne
    marginBottom: 10,

  },

  // Styling til teksten i hver opgave
  itemText: {

    fontSize: 16,

  },

});