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

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

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
      <View
        style={{
          width: "100%",
          height: "50%",
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
        <View
          style={{
            width: "100%",
            height: "10%",
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
          <View
            style={{
              width: "100%",
              height: "50%",
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
              flexDirection: "row",
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
            <View
              style={{
                width: "10%",
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
                justifyContent: "center",
                alignItems: "center",
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
              <Icon
                iconFont="Eva Design Icons"
                name="arrow-ios-back-outline"
                width={20}
                height={20}
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  fontSize: 20,
                  color: "#0f9df5",
                  backgroundColor: "#ffffff",
                  fontStyle: "normal",
                  fontWeight: "normal"
                }}
              />
            </View>
            <View
              style={{
                width: "80%",
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
                justifyContent: "center",
                alignItems: "center",
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
              <Text
                style={{
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
                  fontSize: 16,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontStyle: "normal",
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
              >
                ARTICLE LIST
              </Text>
            </View>
            <View
              style={{
                width: "10%",
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
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "90%",
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
            <View
              style={{
                width: "100%",
                height: "50%",
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
              <View
                style={{
                  width: "100%",
                  height: "75%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 600,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  fontSize: 20,
                  color: "#000000",
                  backgroundColor: "#d4e3f2",
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
                <View
                  style={{
                    width: "090%",
                    height: "45%",
                    marginLeft: "5%",
                    marginRight: "5%",
                    marginTop: 20,
                    marginBottom: 20,
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
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
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
                    <View
                      style={{
                        width: "100%",
                        height: "10%",
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
                      <View
                        style={{
                          width: "100%",
                          height: "10%",
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
                        <View
                          style={{
                            width: "100%",
                            height: "10%",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            overflow: "hidden",
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
                          <Text
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 5,
                              marginBottom: 5,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              fontSize: 14,
                              color: "#000000",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
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
                          >
                            Plants of Our Nature
                          </Text>
                          <Text
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 5,
                              marginBottom: 5,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              fontSize: 11,
                              color: "#4d4d4d",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0
                            }}
                          >
                            5 minutes ago
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: "50%",
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
                      <Image
                        resizeMode="cover"
                        source={{
                          uri:
                            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/Screenshot_2020-07-20_09.39.45_plants.png"
                        }}
                        style={{
                          width: "100%",
                          height: 200,
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "hidden",
                          textAlign: "left",
                          verticalAlign: "baseline",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: "100%",
                        height: "10%",
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
                      <View
                        style={{
                          width: "100%",
                          height: "20%",
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
                          flexDirection: "row",
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
                        <View
                          style={{
                            width: "33.333333333333336%",
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
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
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
                          <Icon
                            iconFont="Eva Design Icons"
                            name="heart-outline"
                            width={20}
                            height={20}
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 5,
                              paddingRight: 5,
                              paddingTop: 5,
                              paddingBottom: 5,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              fontSize: 20,
                              color: "#0f9df5",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              fontWeight: "normal"
                            }}
                          />
                          <Text
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 5,
                              marginBottom: 5,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              fontSize: 14,
                              color: "#888888",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              fontWeight: "normal",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0
                            }}
                          >
                            18
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "33.333333333333336%",
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
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
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
                          <Icon
                            iconFont="Eva Design Icons"
                            name="message-circle-outline"
                            width={20}
                            height={20}
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 5,
                              paddingRight: 5,
                              paddingTop: 5,
                              paddingBottom: 5,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              fontSize: 20,
                              color: "#0f9df5",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              fontWeight: "normal"
                            }}
                          />
                          <Text
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 5,
                              marginBottom: 5,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              fontSize: 14,
                              color: "#888888",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              fontWeight: "normal",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0
                            }}
                          >
                            26
                          </Text>
                        </View>
                        <View
                          style={{
                            width: "33.333333333333336%",
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
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
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
                          <Icon
                            iconFont="Eva Design Icons"
                            name="share-outline"
                            width={20}
                            height={20}
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 5,
                              paddingRight: 5,
                              paddingTop: 5,
                              paddingBottom: 5,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              fontSize: 20,
                              color: "#0f9df5",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              fontWeight: "normal"
                            }}
                          />
                          <Text
                            style={{
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 5,
                              marginBottom: 5,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              textAlign: "left",
                              verticalAlign: "baseline",
                              fontSize: 14,
                              color: "#888888",
                              backgroundColor: "#ffffff",
                              fontStyle: "normal",
                              fontWeight: "normal",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0
                            }}
                          >
                            5
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: "20%",
                  height: "20%",
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
                <View
                  style={{
                    width: "090%",
                    height: "100%",
                    marginLeft: "5%",
                    marginRight: "5%",
                    marginTop: 20,
                    marginBottom: 20,
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
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
