import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";
import Intro1 from "../assets/onboard_pics/intro1.jpg"; 
import Intro2 from "../assets/onboard_pics/intro2.jpg"; 
import Intro3 from "../assets/onboard_pics/intro3.jpg"; 
const OnBoardScreen = () => {
  return (
    <View style={styles.container}>
      <OnboardFlow
        pages={[
          {
            title: "Welcome to Expense Manager",
            subtitle: "Master Your Finances Effortlessly!",
            // Use Image component to display local image
            imageComponent: <Image source={Intro1} style={styles.image} />,
          },
          {
            title: "Introducing Expense Manager",
            subtitle: "Your Pocket-Sized Financial Companion",
            // Use uri for remote image
            imageComponent: <Image source={Intro2} style={styles.image} />,
          },
          {
            title: "Get Started with Expense Manager",
            subtitle: "Simplify Your Spending Habits",
            // Use uri for remote image
            imageComponent: <Image source={Intro3} style={styles.image} />,
          },
        ]}
        type="fullscreen"
        onDone={() => console.log("Done")}
        enableScroll={true}
        paginationColor="gray"
        paginationSelectedColor="blue"
        autoPlay={true}
      />
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    // backgroundColor:'red'
  },
});
