import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";
import reducer, { increment, decrement } from "../modules/countsSlice";

const initialState = 0;

export default function CounterRTKwithSliceReactHook() {
  const [counts, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Button
        title="+ RTKwithSliceReactHook"
        onPress={() => dispatch(increment)}
      />

      <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
      <Button
        title="- RTKwithSliceReactHook"
        onPress={() => dispatch(decrement)}
      />
    </View>
  );
}
