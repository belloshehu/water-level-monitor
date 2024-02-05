import { StyleSheet, View } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { clearAuthenticated } from "../redux/features/auth/authSlice";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(clearAuthenticated());
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <CustomButton pressHandler={handleLogOut} buttonText={"Logout"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffa500",
    color: "white",
  },
});
