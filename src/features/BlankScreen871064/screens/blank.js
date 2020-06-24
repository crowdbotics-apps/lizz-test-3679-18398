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

  state = {}

  render = () => (
    <View
      style={{
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: "20pt",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: "20pt",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderStyle: "solid",
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: "20pt",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto",
            width: "70%"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: "20pt",
              borderStyle: "solid",
              fontWeight: "bold"
            }}
          >
            Event Title
          </Text>
        </View>
        <View
          style={{
            overflow: "visible",
            textAlign: "right",
            verticalAlign: "baseline",
            fontSize: "20pt",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderStyle: "solid",
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              overflow: "visible",
              textAlign: "right",
              verticalAlign: "baseline",
              fontSize: "14pt",
              borderStyle: "solid"
            }}
          >
            12:00pm
          </Text>
        </View>
      </View>
      <Text
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: "12pt",
          borderStyle: "solid",
          fontWeight: "bold"
        }}
      >
        Grand Ballroom
      </Text>
      <Text
        style={{
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: "12pt",
          borderStyle: "solid",
          fontStyle: "italic"
        }}
      >
        Floor 3, Room 412
      </Text>
      <Text
        style={{
          paddingBottom: "450pt",
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: "10pt",
          borderStyle: "solid",
          paddingTop: "10pt",
          paddingLeft: "10pt",
          paddingRight: "10pt"
        }}
      >
        A description of the event. A description of the event. A description of
        the event. A description of the event.
      </Text>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
