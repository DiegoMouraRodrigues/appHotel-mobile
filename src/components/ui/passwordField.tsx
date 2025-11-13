import React, { useState } from "react";
import TextField from "./textFild";
import { TouchableOpacity, View } from "react-native";
import { Ionicons, } from "@expo/vector-icons";
import { global } from "./styles";


type Props = React.ComponentProps<typeof TextField>;

const PasswordField = (restInputProps: Props) => {

    /*React.useStage*/
    const [show, setShow] = useState(false);
    return (
        <View>
            <TextField
            {...restInputProps}

            icon={"lock"}
            secureTextEntry ={!show}
            autoCorrect={false}
        />

            <TouchableOpacity style={global.eyeIcon} onPress={()=> setShow((showTrue)=> !showTrue)}>
            <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={20}/>

            </TouchableOpacity>

        </View>

    
    ); 
};

export default PasswordField;