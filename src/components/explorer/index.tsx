import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/dateSelector";
import TextField from "../ui/textFild";
import RoomCard from "../ui/roomCard";

const RenderExplorer = () => {
  const { width, height } = Dimensions.get("window");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [calendar, setCalendar] = useState<"checkin" | "checkOut">();
  return (
    <AuthContainer>
      {/*children */} {/*check-in*/}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: width * 0.05,
          justifyContent: "center",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{width: width * 0.40}}>
              <TextField
                label="check-in"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="selecione a data"
                value={checkIn}
              />
            </View>
          </TouchableOpacity>
          {calendar === "checkin" && (
            <DateSelector
              onSelectDate={(date) => {
                setCheckIn(date);
              }}
            />
          )}
        </View>

        {/*check-out*/}
        <View style={{ display: "flex", flexDirection: "column" }}>
          <TouchableOpacity onPress={() => setCalendar("checkOut")}>
            <View style={{width: width * 0.40}}>
              <TextField
                label="check-out"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="selecione a data"
                value={checkOut}
              />
            </View>
          </TouchableOpacity>
          {calendar === "checkOut" && (
            <DateSelector
              onSelectDate={(date) => {
                setCheckOut(date);
              }}
            />
          )}
        </View>
      </View>

      <RoomCard
      label="Apartamento"
      icon={{
        lib:"FontAwesome5",
        name:"bed"
      }}
      description={{
        title: "Caracteristica do quarto",
        text: "1 cama de casal\n1 cama de solteiro",
        price:160.90
      }}
      />
    </AuthContainer>
  );
};
export default RenderExplorer;
