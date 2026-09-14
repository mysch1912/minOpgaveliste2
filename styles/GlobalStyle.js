import { StyleSheet } from 'react-native';

export const GlobalStyle = StyleSheet.create({

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  primaryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 8,
    pressedColor: '#d1e7ff',
    defaultColor: '#4A90E2',
  },

  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
  },

  secondaryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 8,
    pressedColor: '#4A90E2',
    defaultColor: '#d1e7ff',
  },

  secondaryBtnText: {
    color: '#000',
    fontSize: 16,
  },

  listContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  itemContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },

  itemText: {
    fontSize: 16,
  },

});