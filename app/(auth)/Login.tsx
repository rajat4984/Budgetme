import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import GestureRecognizer from "react-native-swipe-gestures";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../_layout";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LoginModal() {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });
  const [signUpPage, setSignUpPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    alert('login')
  };

  const handleSignUp = () => {
    alert('signup')
  };

  return (
    <GestureRecognizer
      className="flex-1 p-5 bg-cstm_dark_bg"
      onSwipeDown={() => navigation.goBack()}
    >
      <View className="items-start">
        <Pressable
          onPress={() => navigation.goBack()}
          className="justify-start"
        >
          <Text className="text-cstm_blue text-lg mb-2">close</Text>
        </Pressable>
      </View>

      <View>
        <Text className="text-white text-3xl font-bold">
          {" "}
          {signUpPage ? "Sign up" : "Login"}
        </Text>
        <Text className="text-gray-400 mb-3 mt-1 text-base">
          Add you email and password
        </Text>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View className="my-5">
            <Text className="text-gray-400 text-sm mb-1">Email</Text>
            <TextInput
              selectionColor={"#0052FF"}
              placeholder="Email"
              autoFocus={true}
              className="bg-[#292929] border border-[#424242c2] rounded-lg h-12 text-white pl-2"
              value={authForm.email}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Text className="text-gray-400 text-sm mb-1">Password</Text>
            <View className="flex-row items-center">
              <TextInput
                selectionColor={"#0052FF"}
                placeholder="Password"
                className="bg-[#292929] border border-[#424242c2] rounded-lg h-12 text-white pl-2 flex-1"
                secureTextEntry={!showPassword}
                value={authForm.password}
              />
              {showPassword ? (
                <Ionicons
                  name="eye-outline"
                  size={24}
                  color="gray"
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Ionicons
                  name="eye-off-outline"
                  size={24}
                  color="gray"
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          className="bg-cstm_blue items-center mt-5 py-3 rounded-lg"
          onPress={signUpPage ? handleSignUp : handleLogin}
        >
          <Text className="text-white text-base">
            {signUpPage ? "Sign up" : "Login"}
          </Text>
        </TouchableOpacity>

        <View className="items-center">
          <Text className="text-gray-400 my-4">Or</Text>

          <View className="flex-row">
            <Text className="text-gray-400 justify-center">
              {signUpPage
                ? "Already have an account? "
                : "Don't have an account yet?"}
            </Text>

            <Pressable
              onPress={() => {
                setSignUpPage(!signUpPage);
              }}
            >
              <Text className="text-cstm_blue font-bold">
                {signUpPage ? "Login" : "Sign up"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  eyeIcon: {
    position: "absolute",
    right: "3%",
  },
});
