import React, { useState } from "react";
import { TextInput, View } from "react-native";

const Input = () => {
  const [text, setText] = useState("");
  console.log(text);
  
  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Enter ..."
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

export default Input;
