import { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/dateSelector";
import TextField from "../ui/textFild";

const RenderExplorer = () => {
  const {width, height} = Dimensions.get("window")
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [Calendar, setCalendar] = useState <"checkin" | "chckout">();
  return (
    <AuthContainer>
        {/*children */}
            <View>
              <TouchableOpacity onPress={() =>setCalendar("checkin")}>
              <TextField 
              label="check-in"
              icon={{lib: "FontAwesome5", name: "calendar-alt"}}
              placeholder="selecione a data"
              value={checkIn}
               />

              </TouchableOpacity> 
              {Calendar === "checkin" && (
                <DateSelector
                onSelectDate={(date) => {
                  setCheckIn(Date);
                }}
                />
              )}
              
            </View>
    </AuthContainer>
  );
};
export default RenderExplorer;