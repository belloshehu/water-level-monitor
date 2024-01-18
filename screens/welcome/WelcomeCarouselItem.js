import { Text, StyleSheet, View, Image } from "react-native";

export const WelcomeCarouselItem = ({ imageUrl, text, keyValue }) => {
  return (
    <View style={styles.container} key={keyValue}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 100,
    position: "absolute",
    top: "20%",
    padding: 20,
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.06,
    shadowRadius: 0.3,
    elevation: 2,
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontWeight: "400",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    marginHorizontal: "auto",
    borderRadius: 50,
    margin: "auto",
  },
});
