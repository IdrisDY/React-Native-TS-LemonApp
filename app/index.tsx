import { View, Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import LittleLemonHeader from "@/components/litttleLemon";
import LemonFooter from "@/components/LittleLemonFooter";
import { ComponentProps, FC, useState } from "react";
import { Link } from "expo-router";

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
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    // >
    //   <LittleLemonHeader />
    // </ParallaxScrollView>
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        {/* <LittleLemonHeader /> */}
      </View>
      <View>
        <ThemedText>You think its because of that?</ThemedText>
        <Link href={"/profile"} className="text-white bg-blue-600">
          {" "}
          Go to the profile
        </Link>
      </View>
    </>
  );
}
