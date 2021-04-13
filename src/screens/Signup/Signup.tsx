import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

import { Input, LargeButton, Spinner } from "../../Components";
import { useForm, Controller } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { COLORS } from "../../Utils";
import { CustomStyles } from "../../Utils/Style";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

const Signup = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data, "data");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          {/* <AntDesign
            name="arrowleft" 
            color={COLORS.LIGHT_BLUE}
            size={24}
          /> */}
        </TouchableOpacity>
        <Text style={[CustomStyles.heading, styles.headerTitle]}>Sign Up</Text>
      </View>

      <View style={styles.inputContainer}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={(text: any) => onChange(text)}
              value={value}
              placeholder="Email"
              error={errors.email}
              errorText={errors?.email?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              value={value}
              secureTextEntry={true}
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={(text: any) => onChange(text)}
              error={errors.password}
              errorText={errors?.password?.message}
            />
          )}
        />
      </View>
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={[CustomStyles.caption, styles.forgot]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <LargeButton
          title="Register"
          backgroundColor={COLORS.LIGHT_BLUE}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default Signup;
