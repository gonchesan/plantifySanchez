import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "@/constants/Colors";

import Typography from "@/components/core/Typography.jsx";
import CategorySelector from "@/components/CategorySelector";
import ListItemProduct from "@/components/ListItemProduct";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView>
        <View
          style={{
            flex: 1,
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
            <View
              style={{
                backgroundColor: "gray",
                width: 56,
                height: 56,
                borderRadius: 99,
              }}
            />
            <View style={{ gap: 2, flex: 1 }}>
              <Typography variant="body2">Good morning</Typography>
              <Typography variant="h6">John Doe</Typography>
            </View>

            <Ionicons name="notifications-outline" size={28} />
            <Ionicons name="heart-outline" size={28} />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              paddingVertical: 4,
              paddingHorizontal: 16,
              alignItems: "center",
              marginTop: 16,
              backgroundColor: "#f5f5f5",
              borderRadius: 6,
            }}
          >
            <Ionicons
              name="search-outline"
              size={24}
              style={{ color: "#c3c3c3" }}
            />
            <TextInput
              style={{
                padding: 12,
                flex: 1,
              }}
              placeholder="Search"
            />

            <Ionicons
              name="options-outline"
              size={24}
              style={{ color: COLORS["green"][600] }}
            />
          </View>
          <View
            style={{
              marginTop: 12,
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

              <Pressable onPress={() => navigation.push("Categories")}>
                <Typography
                  variant="button"
                  style={{ color: COLORS["green"][500] }}
                >
                  See all
                </Typography>
              </Pressable>
            </View>

            <CategorySelector />
          </View>
        </View>

        <ListItemProduct />
      </ScrollView>
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
