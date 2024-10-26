import {
  View,
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import LittleLemonHeader from "@/components/litttleLemon";
import LemonFooter from "@/components/LittleLemonFooter";
import { ComponentProps, FC, useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/navigation/CustomButton";
import { StatusBar } from "expo-status-bar";
type HomeProps = {
  identity: number;
  // size: string;
  // union
  primaryColor: "red" | "blue";
  // array that is typed
  cardNumbers?: number[];
  // tuple, specify length of array
  padding?: [number, number, number, number];
  // use when the keys and properties need to be typed e.g - z-index-string: 2-number
  userInfo: Record<string, number>;
  onClick: () => void;
  children: React.ReactNode;
};

// interface HomeProps{
//   tea:string
// }
// use of & is intersect /extending with types and interface
type LinkProps = ComponentProps<"a"> & {
  variant: "Primary " | "Secondary";
};
interface buttonProps {
  btnText: string;
}

interface superButtonProps extends buttonProps {
  size: "md" | "lg";
}

type User = {
  name: string;
  mobile: number;
  id: number;
};

type Guest = Omit<User, "id">;

// Generics
function convertToArray<T>(value: T): T[] {
  return [value];
}

// makes it readonly
const stringOptions = ["option 1", "option 2", "option 3"] as const;

export default function HomeScreen({ size }: superButtonProps) {
  const [stim, setTims] = useState<User | null>(null);

  return (
    <SafeAreaView className="bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[100vh] justify-center items-center  px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[250px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-white text-3xl">
              {" "}
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200"> Aora </Text>{" "}
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 mt-7 text-center font-pregular text-sm">
            {" "}
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora{" "}
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="dark" />
    </SafeAreaView>
  );
}
