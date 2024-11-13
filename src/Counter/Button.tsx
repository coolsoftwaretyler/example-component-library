import React from "react";
import { Pressable, Text, StyleSheet, type ViewStyle } from "react-native";

type ButtonVariant = "plus" | "minus";

interface ButtonProps {
  onPress: () => void;
  variant: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ onPress, variant }) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: variant === "plus" ? "#2ecc71" : "#e74c3c",
  };


  return (
    <Pressable style={({pressed}) => [styles.button, buttonStyle, pressed ? styles.pressedButton : {}]} onPress={onPress}>
      <Text style={styles.buttonText}>{variant === "plus" ? "+" : "-"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedButton: {
   opacity: 0.5 
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 20,
  },
});
