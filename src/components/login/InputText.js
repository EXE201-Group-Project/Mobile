import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';

//Nhận icon từ react native paper
const InputText = ({
  label,
  setText,
  iconName,
  inputType,
  placeholder,
  editable
}) => {
  const icon = iconName ? iconName : 'alert-rhombus-outline';
  //Other input like numeric, email-address,..
  const keyboardType = inputType ? inputType : 'default';
  const setPlaceHolder = placeholder ? placeholder : 'Nhập tại đây...';
  //False thì không nhập đc
  const setEditable = editable !== false ? true : false;
  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>{label ? label : 'Null Label'}</Text>
      <TextInput
        placeholder={setPlaceHolder}
        style={[styles.input, { marginTop: 10 }]}
        onChangeText={setText}
        keyboardType={keyboardType}
        editable={setEditable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  labelTitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
    fontWeight: '500'
  },
  inputOutline: {
    borderRadius: 15
  },
  input: {
    marginTop: 25,
    // width: 350,
    backgroundColor: '#f1f4ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20
  }
});

export default InputText;
