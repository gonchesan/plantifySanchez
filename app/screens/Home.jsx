import { Image, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import COLORS from "@/constants/Colors";

import Typography from "@/components/core/Typography.jsx";
import DropdownUser from "@/components/DropdownUser.jsx";
import ListItemCategories from "@/components/ListItemCategories.jsx";

const Home = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <View style={{ gap: 2, flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", color: COLORS["black"][200] }}
              >
                Welcome back
              </Typography>
              <Image
                source={require("@/assets/images/waving-hand.png")}
                style={{
                  height: 34,
                  width: 34,
                }}
              />
            </View>
            <Typography variant="body1" style={{ color: COLORS["black"][100] }}>
              {user?.fullname}
            </Typography>
          </View>
          <DropdownUser />
        </View>
        <View
          style={{
            marginTop: 12,
            marginBottom: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" style={{ flex: 1 }}>
              Recomended for you
            </Typography>

            <Pressable onPress={() => navigation.push("products")}>
              <Typography
                variant="button"
                style={{ color: COLORS["green"][500] }}
              >
                See all
              </Typography>
            </Pressable>
          </View>
        </View>
      </View>

      <ListItemCategories />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 24,
    paddingHorizontal: 24,
  },
});
