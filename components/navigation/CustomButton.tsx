import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import { isLoading } from "expo-font";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } rounded-xl min-h-[62px] justify-center items-center`}
      disabled={isLoading}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles} `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
