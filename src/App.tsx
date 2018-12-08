import * as React from "react";
import { Text, View } from "react-native";

interface Props {
  title?: string;
}
export default (props: Props) => {
  const { title = "Hello from expo" } = props;
  return (
    <View style={{ marginTop: 50 }}>
      <Text>{title}</Text>
    </View>
  );
};
