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
      <Button
        title="Sayaç Ekranı"
        onPress={() => navigation.navigate("Sayaç Ekranı")}
      ></Button>
      <Button
        title="Kutu Uygulaması"
        onPress={() => navigation.navigate("Kutu Uygulaması")}
      ></Button>
      <Button
        title="Renk Değiştirme Ekranı"
        onPress={() => navigation.navigate("Renk Değiştirme Ekranı")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
