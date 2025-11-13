
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type Props = TextInputProps & {
    label?: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
    }

const TextField = ({label, errorText, icon, style, ...restInputProp }: Props) =>{
    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View> 
                        <MaterialIcons name={icon} size={23} color="black"/>
                    </View>
                )}

                <TextInput
                   keyboardAppearance="dark"
                   placeholderTextColor="#302f2fff"
                   style={[global.input, style]}
                    /*cont textFild = (props: props) =>{
                        const label = props.label;
                        cosnt errorTerxt = props.errorText;
                        const style = props.style;
                        const value = props.value;
                        const onChargeText = props.onChargeText;
                        const placeholder = props.placeholder;
                        const autoCapitalize = autoCapitalize;
                        const keyboardType = props.keyBoardType
                    */

                    {...restInputProp}
                />
            </View>
            {!! errorText && 
                <text style={global.errorText}>{errorText}</text>
            }
        </View>
    
    ) 
};        

export default TextField;
