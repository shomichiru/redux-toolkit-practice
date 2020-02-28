import React from "react";
import { View, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getPageListAsync } from "../actions/getPageListAsync";

export default function PageListWithThunkAsync() {
  const pageLists = useSelector(state => state.pageList.pageList);
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        disabled={pageLists.length ? true : false}
        title="Get Employee"
        onPress={() => dispatch(getPageListAsync())}
      />
      {pageLists.length ? (
        pageLists.map((employee, i) => (
          <Text key={i}>
            {employee.employee_name} / {employee.employee_age}
          </Text>
        ))
      ) : (
        <Text style={{ textAlign: "center" }}>Click ↑↑↑</Text>
      )}
    </View>
  );
}
