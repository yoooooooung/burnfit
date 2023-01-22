import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Calendar = () => {
  //   const dateString = new Date().toLocaleString("en-us", {
  //     timezone: "asia/korea",
  //   });
  //   const dateNormal = new Date().toString();
  const date = new Date().getDate();
  const month = new Date().toString().split(" ")[1];
  const year = new Date().getFullYear();

  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
      <View style={styles.header}>
        <Pressable style={{ flex: 1, alignItems: "center" }}>
          <Icon name="chevron-left" color="skyblue" size={30} />
        </Pressable>
        <Text style={{ flex: 3, fontSize: 22, textAlign: "center" }}>
          {month} {year}
        </Text>
        <Pressable style={{ flex: 1, alignItems: "center" }}>
          <Icon name="chevron-right" color="skyblue" size={30} />
        </Pressable>
      </View>
      <Text>Calendar Container 넣어요</Text>
      <View></View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
});
