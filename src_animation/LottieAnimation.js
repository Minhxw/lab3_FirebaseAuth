import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
const LottieAnimation = ({ navigation }) => {
  useEffect(() => {
    let animationRef;
    
    const navigateLoginForm = () => {
      navigation.navigate("LoginScreen");
    };

    const timeout = setTimeout(navigateLoginForm, 2000);
    return () => {
      if (animationRef) {
        animationRef.reset();
      }
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> Xin chào </Text>
      <LottieView
        source={require("../assets/Animation - 1697986562111.json")}
        style={{ width: 300, height: 300 }}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => {
          navigateLoginForm();
        }}
      />
    </View>
  );
};

export default LottieAnimation;
