import { Pressable, Text } from 'react-native';

import { GlobalStyle } from '../styles/GlobalStyle';

export default function ButtonComponent({ title, onPress, width, height, type }) {
  return (
    <Pressable
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
          width: width,
          height: height,
        },
        type === 'primary'
          ? GlobalStyle.primaryBtn
          : GlobalStyle.secondaryBtn,
      ]}
      onPress={onPress}
    >
      <Text
        style={
          type === 'primary'
            ? GlobalStyle.primaryBtnText
            : GlobalStyle.secondaryBtnText
        }
      >
        {title}
      </Text>
    </Pressable>
  );
}