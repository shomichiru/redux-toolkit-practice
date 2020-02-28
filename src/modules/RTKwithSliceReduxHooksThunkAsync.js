import React from "react";
import { View, Button, Text } from "react-native";
import { increment, decrement } from "../modules/countsSlice";
import { useSelector, useDispatch } from "react-redux";

const incrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

const decrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};

export default function RTKwithSliceReduxHooksThunkAsync() {
  const counts = useSelector(state => state.counts);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="+ RTKwithSliceReduxHooksThunkAsync"
        onPress={() => dispatch(incrementAsync())}
      />
      <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
      <Button
        title="- RTKwithSliceReduxHooksThunkAsync"
        onPress={() => dispatch(decrementAsync())}
      />
    </View>
  );
}
