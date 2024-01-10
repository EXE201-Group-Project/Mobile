//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import InputSpinner from "react-native-input-spinner";
import SwitchSelector from "react-native-switch-selector";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

// create a component
const AddedStop = (selectedItems) => {
  const data = JSON.stringify(selectedItems);
  const { name, details } = data || {};
  const [number, setNumber] = useState(1);
  console.log(data);

  const option1 = [
    { label: "First", value: "first" },
    { label: "Auto", value: "auto" },
    { label: "Last", value: "last" },
  ];

  const option2 = [
    { label: "Delivery", value: "delivery" },
    { label: "Pickup", value: "pickup" },
  ];

  return (
    <View style={styles.container}>
      <BottomSheetScrollView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "blue", height: 15 }}></View>
        <View
          style={{
            backgroundColor: "green",
            padding: 5,
            width: "20%",
            marginTop: 15,
            marginLeft: 15,
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderRadius: 7,
          }}
        >
          <View>
            <AntDesign name="checkcircle" size={20} color="black" />
          </View>
          <View>
            <Text style={{ color: "blue" }}>Added</Text>
          </View>
        </View>
        <View style={{ marginLeft: 15, marginTop: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Tan Son Nhat International Airport (SGN)
          </Text>
        </View>
        <View style={{ marginLeft: 15, marginTop: 0 }}>
          <Text style={{ fontSize: 20 }}>Trường Sơn, Tân Bình</Text>
        </View>
        <View
          style={{
            borderRadius: 5,
            borderColor: "green",
            borderTopWidth: 2,
            borderBottomWidth: 2,
            height: 50,
            marginTop: 10,
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{ fontSize: 20, marginLeft: 15 }}
            placeholder="Add notes (recipient, instructions, etc...)"
          />
        </View>
        <TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
        
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <View>
              <Feather name="package" size={34} color="black" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20 }}>Package finder</Text>
            </View>
          </View>
          <View style={{ marginRight: 10 }}>
            <Text style={{ fontSize: 20 }}>abc</Text>
          </View>
          
        </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <View>
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={34}
                color="black"
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20 }}>Packages</Text>
            </View>
          </View>
          <View
            style={{
              marginRight: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <InputSpinner
              buttonStyle={{ backgroundColor: "white" }}
              // showBorder = {true}
              rounded={false}
              textColor="blue"
              buttonTextColor={"gray"}
              max={10}
              min={1}
              step={1}
              // colorMax={"gray"}
              // colorMin={"gray"}
              width={120}
              height={40}
              value={number}
              onChange={(num) => {
                setNumber(num);
                console.log(num);
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <View>
              <Octicons name="list-ordered" size={34} color="black" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20 }}>Order</Text>
            </View>
          </View>
          <View style={{ marginRight: 10, borderRadius: 8, borderWidth: 2, borderColor: "gray" }}>
            <SwitchSelector
              borderWidth = {4}
              textColor = {"gray"}
              borderColor = {"gray"}
              selectedColor={"blue"}
              buttonColor={"yellow"}
              borderRadius = {10}
              options={option1}
              initial={0}
              onPress={(value) =>
                console.log(`Call onPress with value: ${value}`)
              }
              style={{ width: 160, height: 40 }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <View>
              <Octicons name="list-ordered" size={34} color="black" />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20 }}>Type</Text>
            </View>
          </View>
          <View style={{ marginRight: 10, borderRadius: 8, borderWidth: 2, borderColor: "gray" }}>
            <SwitchSelector
              borderWidth = {4}
              textColor = {"gray"}
              borderColor = {"gray"}
              selectedColor={"blue"}
              buttonColor={"yellow"}
              borderRadius = {10}
              options={option2}
              initial={0}
              onPress={(value) =>
                console.log(`Call onPress with value: ${value}`)
              }
              style={{ width: 160, height: 40 }}
            />
          </View>
        </View>
      </BottomSheetScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
});

//make this component available to the app
export default AddedStop;
