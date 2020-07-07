import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {
    Input_2: "test",
    Input_3: "text input",
    Input_4: "1",
    Datepicker_5: new Date("07/07/2020"),
    Input_6: ""
  }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        textStyle={{ height: 100, fontSize: 30, color: "#e421ca" }}
        style={{
          width: "100%",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 15,
          marginBottom: 15,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
          paddingBottom: 15,
          overflow: "hidden",
          textAlign: "justify",
          verticalAlign: "text-bottom",
          fontSize: 30,
          color: "#e421ca",
          backgroundColor: "#ff2424",
          fontStyle: "italic",
          fontWeight: "bold",
          borderColor: "#2534ad",
          borderStyle: "solid",
          borderLeftWidth: 2,
          borderRightWidth: 3,
          borderTopWidth: 1,
          borderBottomWidth: 4,
          borderRadius: 0
        }}
        value={this.state.Input_2}
        onChangeText={nextValue => this.setState({ Input_2: nextValue })}
      />
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        textStyle={{ fontSize: 20, color: "#dc189e" }}
        style={{
          width: "100%",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 15,
          marginBottom: 15,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
          paddingBottom: 15,
          overflow: "visible",
          textAlign: "justify",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#dc189e",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#f60404",
          borderStyle: "solid",
          borderWidth: 3,
          borderRadius: 0
        }}
        value={this.state.Input_3}
        onChangeText={nextValue => this.setState({ Input_3: nextValue })}
      />
      <Input
        placeholder=""
        editable={true}
        keyboardType="numeric"
        textStyle={{ fontSize: 30, color: "#f24040" }}
        style={{
          width: "100%",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 15,
          marginBottom: 15,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
          paddingBottom: 15,
          overflow: "visible",
          textAlign: "justify",
          verticalAlign: "baseline",
          fontSize: 30,
          color: "#f24040",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#33df11",
          borderStyle: "solid",
          borderLeftWidth: 2,
          borderRightWidth: 4,
          borderTopWidth: 1,
          borderBottomWidth: 3,
          borderRadius: 0
        }}
        value={this.state.Input_4}
        onChangeText={nextValue => this.setState({ Input_4: nextValue })}
      />
      <Datepicker
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 15,
          marginBottom: 15,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
          paddingBottom: 15,
          overflow: "visible",
          textAlign: "justify",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#c84646",
          backgroundColor: "#ff9494",
          fontStyle: "italic",
          fontWeight: "bold",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0
        }}
        date={this.state.Datepicker_5}
        onSelect={nextValue => this.setState({ Datepicker_5: nextValue })}
      />
      <Input
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        textStyle={{ height: 100, fontSize: 20, color: "#000000" }}
        style={{
          width: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          textAlign: "justify",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          borderColor: "#e14e0e",
          borderStyle: "solid",
          borderLeftWidth: 2,
          borderRightWidth: 3,
          borderTopWidth: 1,
          borderBottomWidth: 4,
          borderRadius: 0
        }}
        value={this.state.Input_6}
        onChangeText={nextValue => this.setState({ Input_6: nextValue })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
