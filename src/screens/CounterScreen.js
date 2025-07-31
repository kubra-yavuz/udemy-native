import { StyleSheet, Text, View, Button } from "react-native";
import React, { use } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
  }
};

//state == { count: 0 }
//action == { type: "increment" || type: "decrement" payload: 1 }

export default function CounterScreen() {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Arttır"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
          //setCount(count + 1);
        }}
      ></Button>
      <Button
        title="Azalt"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
          //setCount(count - 1);
        }}
      ></Button>
      <Text>Sayı:{state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
