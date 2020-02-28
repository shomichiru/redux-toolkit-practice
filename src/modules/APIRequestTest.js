/**
 * JSONPlaceholder
 * Fake Online REST API for Testing and Prototyping
 * https://jsonplaceholder.typicode.com/
 */

import React, { useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const URLs = {
  employees: "http://dummy.restapiexample.com/api/v1/employees",
  fakePosts: "https://jsonplaceholder.typicode.com/posts/1",
  fakeTodos: "https://jsonplaceholder.typicode.com/todos/2"
};
export const APIRequestTest = props => {
  useEffect(() => {
    axios.get(URLs.fakePosts).then(response => console.log(response.data));
    fetch(URLs.fakeTodos)
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  return (
    <View>
      <Text>APIRequestTest</Text>
    </View>
  );
};
