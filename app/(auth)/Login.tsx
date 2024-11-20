import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GestureRecognizer from "react-native-swipe-gestures";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../_layout";

type LoginModalProps = {
  setIsModalVisible: (visible: boolean) => void;
};

export default function LoginModal() {
  const [loginForm, setLoginForm] = useState({});
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 p-5 bg-cstm_dark_bg">
      <Pressable>
        <Text className="text-cstm_blue text-lg">close</Text>
      </Pressable>

      <View>
        <Text className="text-white">Log In</Text>
        <Text className="text-gray-400">Add you email and password</Text>

        <View>
          <Text className="text-gray-400">Email</Text>
          <TextInput
            placeholder="Email"
            className="border-2 border-white h-10 text-white"
          />
        </View>

        <View>
          <Text className="text-gray-400">Password</Text>
          <TextInput
            placeholder="Password"
            className="border-2 border-white h-10 text-white"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity className="bg-cstm_blue">
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
      </View>

      <Text></Text>
    </SafeAreaView>
  );
}
