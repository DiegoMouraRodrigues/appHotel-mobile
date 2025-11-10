import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof FontAwesome6.glyphMap;
}

export default function TextField({label, errorText, icon}: Props){
    return (
        <View>
            <Text>Teste de label</Text>
            <View>
                {!! icon && (
                    <View> 
                        <FontAwesome6 name={icon} size={18} color="black"/>
                    </View>
                )}

                <TextInput
                    value="isso E so um teste"
                />
            </View>
        </View>
        


    ) 
        
    
}