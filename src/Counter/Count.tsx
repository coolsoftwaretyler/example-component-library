import React from "react";
import { Text } from "react-native";

export const Count: React.FC<{ count: number }> = ({ count }) => {
  return <Text>{count}</Text>;
};
