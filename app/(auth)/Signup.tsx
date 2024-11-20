import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GestureRecognizer from "react-native-swipe-gestures";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../_layout";

export default function Signup() {
  const [signUpForm, setSignUpForm] = useState({});
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <GestureRecognizer
      className="flex-1 p-5 bg-cstm_dark_bg"
      onSwipeDown={() => navigation.goBack()}
    >
      <SafeAreaView>
        <Pressable onPress={() => navigation.goBack()}>
          <Text className="text-cstm_blue text-lg mb-2">close</Text>
        </Pressable>

        <View>
          <Text className="text-white text-3xl font-bold">Log In</Text>
          <Text className="text-gray-400 mb-3 mt-1 text-base">
            Add you email and password
          </Text>

          <View className="my-5">
            <Text className="text-gray-400 text-sm mb-1">Email</Text>
            <TextInput
              selectionColor={"#0052FF"}
              placeholder="Email"
              autoFocus={true}
              className="bg-[#292929] border border-[#424242c2] rounded-lg h-12 text-white pl-2"
            />
          </View>

          <View>
            <Text className="text-gray-400 text-sm mb-1">Password</Text>
            <TextInput
              selectionColor={"#0052FF"}
              placeholder="Password"
              autoFocus={true}
              className="bg-[#292929] border border-[#424242c2] rounded-lg h-12 text-white pl-2 "
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity className="bg-cstm_blue items-center mt-5 py-3 rounded-lg">
            <Text className="text-white text-base">Login</Text>
          </TouchableOpacity>

          <View className="items-center">
            <Text className="text-gray-400 my-4">Or</Text>
            <Text className="text-gray-400">
              Don't have an account yet?
              <Pressable
                onPress={() => {
                  navigation.goBack();
                  navigation.navigate("Signup");
                }}
              >
                <Text className="text-cstm_blue font-bold"> Sign up</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </GestureRecognizer>
  );
}
