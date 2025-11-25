import DatePicker, {getFormatedDate, getToday} from "react-native-modern-datepicker"
import {Label } from "@react-navigation/elements";
import { useState } from "react"
import { View} from "react-native";


type Props = {
    label?: string;
};


const dateSelector = ({label}: Props) => {
    const tomorrow = new Date(getToday() +1);
    const startDate = getFormatedDate(tomorrow, "YYYY/MM/DD h:m") 

    const [selectDate, setSelectedDate]= useState("");
    return(
        <View>
            {!!Label &&<text>{label}</text>}
            <DatePicker
                options={{
                    backgroundColor: '#090C08',
                    textHeaderColor: '#FFA25B',
                    textDefaultColor: '#F6E7C1',
                    selectedTextColor: '#fff',
                    mainColor: '#F4722B',
                    textSecondaryColor: '#D6C7A1',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
                style={{borderRadius: 15}}
                isGregorian={true}
                minimumDate={startDate}
                selected={selectDate}
                onSelectedChange={date => setSelectedDate(date)}
                />
                
    
        </View>
    );
};

export default dateSelector;