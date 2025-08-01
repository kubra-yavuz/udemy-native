import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function PasswordScreen() {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.main}>
      <Text>Şifrenizi Giriniz:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none" // Şifre girişi için otomatik büyük harf kullanımını kapatır.
        autoCorrect={false} // Otomatik düzeltmeyi kapatır.
        value={password} // Varsayılan değer olarak "password" kullanılır.
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text style={{ color: "red" }}>Şifre en az 6 karakter olmalıdır.</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
});
