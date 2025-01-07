import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { DUMMY_USERS } from "@/constants/DummyUsers";

import ItemCard from "@/components/ItemCard";
import Typography from "@/components/Typography.jsx";
import Button from "@/components/Button.jsx";
import Chip from "@/components/Chip.jsx";
import { Colors } from "./constants/Colors";

export default function Index() {
  const CATEGORIES = [
    { name: "All", slug: "all" },
    { name: "Top Pick", slug: "top-picked" },
    { name: "Indoor", slug: "indoor" },
    { name: "Outdoor", slug: "outdoor" },
    { name: "Seeds", slug: "seeds" },
    { name: "Planters", slug: "planters" },
  ];

  // const navigateTo = () => {};
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            //TODO Remove above of this
            paddingHorizontal: 24,
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
              style={{ color: Colors["green"][600] }}
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

              <Typography
                variant="button"
                style={{ color: Colors["green"][500] }}
              >
                See all
              </Typography>
            </View>

            <View>
              <FlatList
                contentContainerStyle={{ gap: 8, marginTop: 12 }}
                data={CATEGORIES}
                horizontal
                renderItem={({ item }) => <Chip>{item.name}</Chip>}
                keyExtractor={(item) => item.slug}
              />
            </View>
          </View>
          {/* <Button icon="bag-add" rounded="full">
            Dummy button
          </Button> */}
          {/* <FlatList
            data={DUMMY_USERS}
            renderItem={({ item }) => <ItemCard item={item} />}
            keyExtractor={(item) => item.name}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffffff",
  },
});
