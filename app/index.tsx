import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import LoginModal from "@/components/custom/LoginModal";
import GestureRecognizer from "react-native-swipe-gestures";
import { useNavigation } from "expo-router";
import { RootStackParamList } from "./_layout";
import { NavigationProp } from "@react-navigation/native";

export default function index() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SafeAreaView className="bg-cstm_dark_bg flex-1 items-center">
      <GestureRecognizer
        config={config}
        className="bg-white flex-1"
        onSwipeDown={() => setIsModalVisible(false)}
      >
        <Modal visible={isModalVisible} animationType="slide">
          <LoginModal setIsModalVisible={setIsModalVisible} />
        </Modal>
      </GestureRecognizer>

      <View>
        <Text className="text-white text-3xl font-bold my-12">
          Budget<Text className="text-cstm_blue">Me</Text>
        </Text>
      </View>

      <View>
        <Image
          contentFit="contain"
          source={require("../assets/images/auth1.svg")} // Local image
          style={{ width: 300, height: 300 }}
        />
      </View>

      <View className="mt-10 mb-5 text-center">
        <Text className="text-2xl font-bold text-white text-center">
          Organize your work and life, finally
        </Text>
      </View>

      <View className="mt-10">
        {/* <View className="bg-white rounded-sm my-2 flex flex-row items-center justify-center px-8">
          <Image
            source={require("../assets/images/auth_apple.svg")}
            style={{ width: 20, height: 20 }}
          />
          <Text className="font-bold py-1 text-base ml-2">
            Continue with Apple
          </Text>
        </View> */}
        <View className="bg-white rounded-sm my-2 flex flex-row justify-center items-center px-8">
          <Image
            source={require("../assets/images/auth_google.svg")}
            style={{ width: 20, height: 20 }}
          />
          <Text className="font-bold py-1 text-base ml-2">
            Continue with Google
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          className="bg-white rounded-sm my-2 flex flex-row justify-center items-center px-8"
        >
          <Image
            source={require("../assets/images/auth_mail.svg")}
            style={{ width: 20, height: 20 }}
          />
          <Text className="font-bold py-1  text-base ml-2">
            Continue with Email
          </Text>
        </TouchableOpacity>
        {/* <View className="flex-1 items-center">
          <Text className="text-gray-400 underline text-xs">
            Continue with more options
          </Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
