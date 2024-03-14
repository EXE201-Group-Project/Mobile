import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const InputSecureText = ({ label, setSecureText, placeholder }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelTitle}>{label ? label : 'Null label'}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : 'Nhập mật khẩu...'}
        style={[styles.input, { marginTop: 10 }]}
        onChangeText={setSecureText}
        secureTextEntry={secureTextEntry}
        right={
          <TextInput.Icon
            icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
            color={'black'}
            onPress={toggleSecureEntry}
          />
        }
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
    marginBottom: 8,
    color: 'black',
    fontWeight: '500'
  },
  inputOutline: {
    borderRadius: 15
  },
  input: {
    marginTop: 25,
    backgroundColor: '#f1f4ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20
  }
});

export default InputSecureText;
