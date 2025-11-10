
import {StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },
    KeyboardAvoiding:{
        flex: 1
    },

    container:{
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07,
        
    },

    header:{
        alignItems: "center",
        marginTop: height * 0.03
    },
    title:{
        fontSize:20,
        fontWeight:"800",
        /*para atribuir cor: color:*/ 
    },
    
    subtitle:{
        fontSize:17,
        marginTop: height * 0.03


        
    },
    content:{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: width * 0.02,
        elevation: 8,
        shadowColor: "red",
        
    }

})