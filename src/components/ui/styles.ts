
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
        
    },

    //imputs
    inputGroup:{
        marginBottom: height * 0.02,
    },

    label:{
        fontSize: 17,
        fontWeight: "600",
        color: "#000000ff",
        marginBottom: height * 0.02
    },

    inputIcon:{
        backgroundColor: "#ffffff",
        paddingLeft: width *0.02,
        flexDirection:"row",
        alignItems: "center",
        borderEndWidth: 2,
        borderColor: "#240144",
        borderRadius: 10,
        
    },

    inputError:{
         backgroundColor: "#f5b5b5ff",
         borderColor: "#ff2002ff"
    },

    input:{
        flex: 1,
        fontSize: 17,
        color: "#0000",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },

    errorText:{
        color:"red",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01

    }

})