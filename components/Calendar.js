import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Calendar = () => {
  //   const dateString = new Date().toLocaleString("en-us", {
  //     timezone: "asia/korea",
  //   });
  //   const dateNormal = new Date().toString();
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date().getDate();
  //   const month = new Date().toString().split(" ")[1];
  const monthNumber = new Date().getMonth();
  const year = new Date().getFullYear();

  const [selectMonth, setSelectMonth] = useState(monthNumber);
  const [selectYear, setSelectYear] = useState(year);

  const month = monthList[selectMonth];

  const toPrevMonth = () => {
    if (selectMonth == 0) {
      setSelectYear((a) => a - 1);
      setSelectMonth(11);
    } else {
      setSelectMonth((a) => a - 1);
    }
  };
  const toNextMonth = () => {
    if (selectMonth == 11) {
      setSelectYear((a) => a + 1);
      setSelectMonth(0);
    } else {
      setSelectMonth((a) => a + 1);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
      <View style={styles.header}>
        <Pressable
          style={{ flex: 1, alignItems: "center" }}
          onPress={toPrevMonth}
        >
          <Icon name="chevron-left" color="skyblue" size={30} />
        </Pressable>
        <Text style={{ flex: 3, fontSize: 22, textAlign: "center" }}>
          {month} {selectYear}
        </Text>
        <Pressable
          style={{ flex: 1, alignItems: "center" }}
          onPress={toNextMonth}
        >
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
