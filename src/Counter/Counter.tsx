import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Count } from "./Count";
import { Button } from "./Button";

export interface ICounterProps {
  initialCount?: number,
  maxCount?: number,
  minCount?: number,
}

export const Counter: React.FC<ICounterProps> = (props) => {
  const { initialCount, maxCount, minCount } = props
  const [count, setCount] = useState(initialCount ?? 0);

  const handleIncrement = () => {
    if (!maxCount || count < maxCount) {
      setCount((prev: number) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (!minCount || count > minCount) {
      setCount((prev: number) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Button variant="minus" onPress={handleDecrement} />
      <View style={styles.countContainer}>
        <Count count={count} />
      </View>
      <Button variant="plus" onPress={handleIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  countContainer: {
    marginHorizontal: 20,
  },
});
