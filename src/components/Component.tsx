import * as React from "react";
import * as _ from "lodash";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native";

interface Props {
  title: string;
}

interface State {
  loading: boolean;
}

export default class Component extends React.Component<Props, State> {
  state: State = {
    loading: false
  };

  handleButtonPress = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.timeStamp);
  };

  doSomethingSpecific = (word: string) => {
    console.log("something passed: ", word);
    const trimmed = _.trim("test       ");
    console.log(`Trimmed via lodash ${trimmed}`);
  };

  public render() {
    const { title = "Hello from component" } = this.props;
    return (
      <View>
        <Text> {title}</Text>

        <Button
          title="Button using easier event handling"
          onPress={() => {
            this.doSomethingSpecific("pass something");
          }}
        />
        <Button title="Just a button" onPress={this.handleButtonPress} />
      </View>
    );
  }
}
