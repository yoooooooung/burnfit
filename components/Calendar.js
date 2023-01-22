import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Calendar = () => {
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

  const monthNumber = new Date().getMonth(); //month 숫자로
  const year = new Date().getFullYear();

  const [selectMonth, setSelectMonth] = useState(monthNumber);
  const [selectYear, setSelectYear] = useState(year);

  const month = monthList[selectMonth]; //month 영어로

  //const date = new Date().getDate();

  //이번달 마지막 날
  const lastDate = new Date(selectYear, selectMonth + 1, 0).getDate();
  //이번달 날짜 리스트
  const thisMonthList = Array.from({ length: lastDate }, (v, i) => i + 1);

  //이번달 시작 요일 index = 저번달의 날짜 필요한 갯수 (firstDay가 0일때는 저번달 필요없음)
  const firstDay = new Date(selectYear, selectMonth, 1).getDay();
  //저번달 마지막 날
  const lastMonthLastDate = new Date(selectYear, selectMonth, 0).getDate();
  //저번달 날짜 리스트
  const lastMonthList = Array.from(
    { length: firstDay },
    (v, i) => lastMonthLastDate - firstDay + 1 + i
  );
  //6 - 이번달 마지막 요일 index = 다음달 날짜 필요한 갯수
  const lastDay = new Date(selectYear, selectMonth + 1, 0).getDay();
  //다음달 날짜 필요한 갯수 : 35 - (저번달 + 이번달 날짜 갯수)
  const nextMonthList = Array.from({ length: 6 - lastDay }, (v, i) => i + 1);

  //달력에 뿌려줄 날들
  const dateList = [...lastMonthList, ...thisMonthList, ...nextMonthList];
  console.log(dateList);

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
    <View style={styles.makeCenter}>
      <View style={styles.header}>
        <Pressable style={styles.makeCenter} onPress={toPrevMonth}>
          <Icon name="chevron-left" color="skyblue" size={30} />
        </Pressable>
        <Text style={{ flex: 3, fontSize: 20, textAlign: "center" }}>
          {month} {selectYear}
        </Text>
        <Pressable style={styles.makeCenter} onPress={toNextMonth}>
          <Icon name="chevron-right" color="skyblue" size={30} />
        </Pressable>
      </View>
      <View style={styles.week}>
        {weekList.map((day) => (
          <View style={styles.makeCenter} key={day}>
            {day === "Sun" ? (
              <Text style={{ color: "red" }}>{day}</Text>
            ) : day === "Sat" ? (
              <Text style={{ color: "skyblue" }}>{day}</Text>
            ) : (
              <Text>{day}</Text>
            )}
          </View>
        ))}
      </View>
      <View style={styles.container}>
        {lastMonthList.map((b) => (
          <Text style={styles.notThisMonth}>{b}</Text>
        ))}
        {thisMonthList.map((b) => (
          <Text style={styles.thisMonth}>{b}</Text>
        ))}
        {nextMonthList.map((b) => (
          <Text style={styles.notThisMonth}>{b}</Text>
        ))}
      </View>

      {/* <View>
        <Text>이번달은 며칠까지 있을까 : {lastDate}</Text>
        <Text>이번달은 무슨요일부터? : {firstDay}</Text>
        <Text>thisMonthList :</Text>
        {thisMonthList.map((b) => (
          <Text>{b}</Text>
        ))}

        <Text>lastMonthList :</Text>
        {lastMonthList.map((b) => (
          <Text>{b}</Text>
        ))}

        <Text>nextMonthList :</Text>
        {nextMonthList.map((b) => (
          <Text>{b}</Text>
        ))}
      </View> */}
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  makeCenter: { flex: 1, alignItems: "center", textAlign: "center" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },

  week: {
    flexDirection: "row",
    alignContent: "space-evenly",
    paddingTop: 10,
  },

  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
  },

  thisMonth: {
    width: "14.2%",
    paddingTop: 30,
    textAlign: "center",
  },
  notThisMonth: {
    color: "gray",
    width: "14.2%",
    paddingTop: 30,
    textAlign: "center",
  },
});
