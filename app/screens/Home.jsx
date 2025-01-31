import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";

import { Ionicons } from "@expo/vector-icons";

import COLORS from "@/constants/Colors";

import Typography from "@/components/core/Typography.jsx";
import CategorySelector from "@/components/CategorySelector";
import ListItemProduct from "@/components/ListItemProduct";
import { useGetProductsQuery } from "@/services/shopService";

const Home = () => {
  const navigation = useNavigation();
  // const PRODUCTS = useSelector((state) => state.shopReducer.products);
  const { data: PRODUCTS, isLoading } = useGetProductsQuery();
  //TODO Create helper to format filter by backend
  // setProducts(Object.values(data).filter(product => product.title.includes(keyword)))
  const { image } = useSelector((state) => state.authReducer.user);

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
              John Doe
            </Typography>
          </View>

          <Image
            source={
              image
                ? { uri: image }
                : {
                    uri: "https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM=",
                  }
            }
            resizeMode="cover"
            style={{
              backgroundColor: "gray",
              width: 56,
              height: 56,
              borderRadius: 99,
            }}
          />
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

            <Pressable onPress={() => navigation.push("categories")}>
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

      <ListItemProduct products={PRODUCTS} />
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
