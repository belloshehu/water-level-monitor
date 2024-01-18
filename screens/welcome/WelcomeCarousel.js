import { View, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { WelcomeCarouselItem } from "./WelcomeCarouselItem";

export const WelcomeCarousel = () => {
  return (
    <PagerView style={styles.container}>
      <WelcomeCarouselItem
        imageUrl={require("../../assets/images/tank.png")}
        text={"View water level your tank"}
        keyValue={"1"}
      />
      <WelcomeCarouselItem
        imageUrl={require("../../assets/images/analysis-phone.png")}
        text={"Get analysis of energy used to pump water"}
        keyValue={"2"}
      />
      <WelcomeCarouselItem
        imageUrl={require("../../assets/images/energy.png")}
        text={"Get various analysis of water you used"}
        keyValue={"3"}
      />
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
