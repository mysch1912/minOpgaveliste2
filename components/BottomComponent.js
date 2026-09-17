// Importerer Pressable til knappen og Text til teksten på knappen
import { Pressable, Text } from 'react-native';

// Henter styling fra GlobalStyle-filen
import { GlobalStyle } from '../styles/GlobalStyle';

// Opretter en genanvendelig knap, som modtager forskellige props
export default function ButtonComponent({ title, onPress, width, height, type }) {
  return (
    <Pressable
      // Bestemmer knappens styling og ændrer farven, når knappen trykkes
      style={({ pressed }) => [
        {
          backgroundColor:
            type === 'primary'
              ? pressed
                ? GlobalStyle.primaryBtn.pressedColor
                : GlobalStyle.primaryBtn.defaultColor
              : pressed
                ? GlobalStyle.secondaryBtn.pressedColor
                : GlobalStyle.secondaryBtn.defaultColor,
          // Bestemmer knappens bredde og højde
          width: width,
          height: height,
        },
        // Vælger styling alt efter om knappen er primary eller secondary
        type === 'primary'
          ? GlobalStyle.primaryBtn
          : GlobalStyle.secondaryBtn,
      ]}
      // Bestemmer hvad der sker, når brugeren trykker på knappen
      onPress={onPress}
    >
      <Text
        // Vælger tekstens styling ud fra knappens type
        style={
          type === 'primary'
            ? GlobalStyle.primaryBtnText
            : GlobalStyle.secondaryBtnText
        }
      >
        {/* Viser den titel/tekst, som knappen har fået */}
        {title}
      </Text>
    </Pressable>
  );
}