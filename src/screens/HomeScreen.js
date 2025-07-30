import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Courses"
        onPress={() => navigation.navigate("Courses")}
      ></Button>
      <Button
        title="CoursesInformationScreen"
        onPress={() => navigation.navigate("CoursesInformationScreen")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
