import React from "react";
import { TextInput } from "react-native";
import { COLORS } from "Utils";
import { CustomStyles } from "Utils/Style";

import { Layout, Text, Input as Inputt } from "@ui-kitten/components";

import styles from "./styles";

interface InputProps {
  secureTextEntry?: any;
  placeholder: string;
  defaultValue?: string;
  onChangeText?: any;
  keyboardType?: any;
  autoFocus?: any;
  error?: any;
  errorText?: string;
  value?: any;
  onBlur?: any;
}

const Input = (props: InputProps) => {
  return (
    <Layout>
      <Inputt
        defaultValue={props.defaultValue}
        style={[
          styles.input,
          CustomStyles.caption,
          {
            borderColor: props.error ? "red" : null,
            borderWidth: props.error ? 1 : null,
          },
        ]}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        //placeholderTextColor={COLORS.WHITE}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        autoFocus={props.autoFocus}
        numberOfLines={1}
        autoCapitalize="none"
        autoCompleteType="off"
        onBlur={props.onBlur}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </Layout>
  );
};

export default Input;
