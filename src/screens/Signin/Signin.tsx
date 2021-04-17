import React, { useState, useContext } from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import * as yup from "yup";
import styles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, LargeButton, Spinner } from "Components";
import { AuthContext } from "Navigation/AuthProvider";
import { COLORS } from "Utils";
import { CustomStyles } from "Utils/Style";
import { AuthStackProps } from "Navigation/types";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type LoginFormInputs = {
  email: string;
  password: string;
};

const Signin = ({ navigation }: AuthStackProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const { login, spinner, error } = useContext(AuthContext);

  const onSubmit = (data: any) => {
    login(data.email, data.password);
  };

  return (
    <>
      <StatusBar hidden />
      <Layout style={styles.container}>
        {spinner && <Spinner />}
        <Layout style={styles.header}>
          <TouchableOpacity>
            {/* <AntDesign
            name="arrowleft" 
            color={COLORS.LIGHT_BLUE}
            size={24}
          /> */}
          </TouchableOpacity>
          <Text style={[CustomStyles.heading, styles.headerTitle]}>
            Sign In
          </Text>
        </Layout>
        <Layout style={styles.inputContainer}>
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
        </Layout>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={[CustomStyles.caption, styles.forgot]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {error ? <Text style={styles.errorContainer}>{error}</Text> : null}
        <Layout style={styles.buttonContainer}>
          <LargeButton
            title="Log In"
            backgroundColor={COLORS.LIGHT_BLUE}
            onPress={handleSubmit(onSubmit)}
          />
        </Layout>
      </Layout>
    </>
  );
};

export default Signin;
