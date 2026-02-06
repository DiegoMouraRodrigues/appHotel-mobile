import DatePicker, {getFormatedDate, getToday} from "react-native-modern-datepicker"
import {Label } from "@react-navigation/elements";
import { useState } from "react"
import { Dimensions, Text, View} from "react-native";

type DateSelectorProps = {
    onSelectDate: (date: string) => void;
}

const dateSelector = ({onSelectDate} : DateSelectorProps) => {
   const {width, height} = Dimensions.get("window");
   const startDate = getToday();
   console.log(startDate);
//    const tomorrow = new Date(startDate);
//    console.log(typeof(tomorrow)); 

    const [selectDate, setSelectedDate]= useState("");
    return(
        <View>
            {!!Label &&<Text></Text>}
            <DatePicker
                mode="calendar"
                options={{
                    backgroundColor: '#090C08',
                    textHeaderColor: '#FFA25B',
                    textDefaultColor: '#F6E7C1',
                    selectedTextColor: '#fff',
                    mainColor: '#F4722B',
                    textSecondaryColor: '#D6C7A1',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                    textFontSize: 15,
                    textHeaderFontSize: 15,
                }}
                style={{borderRadius: 15, width: width * 0.62, height: "auto"}}
                isGregorian={true}
                minimumDate={startDate}
                selected={selectDate}
                onSelectedChange={(Date) =>{
                    setSelectedDate(Date);
                    onSelectDate;
                }}
                />
        </View>
    );
};
export default dateSelector;