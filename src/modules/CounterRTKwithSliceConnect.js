import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { increment, decrement } from "../modules/countsSlice";

class CounterRTKwithSliceConnect extends Component {
  render() {
    const { counts } = this.props;
    return (
      <View>
        <Button
          title="+ RTKwithSliceConnect"
          onPress={() => this.props.increment()}
        />
        <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
        <Button
          title="- RTKwithSliceConnect"
          onPress={() => this.props.decrement()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counts: state.counts
});

const mapDispatchToProps = { increment, decrement };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterRTKwithSliceConnect);
