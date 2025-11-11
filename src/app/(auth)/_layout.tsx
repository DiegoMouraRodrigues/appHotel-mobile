/*
 função: definir o fluxo da navegação entre as telas login, register resetPassword
 Sobreposisção de telas: stack navigator, 3 funçoes para manipular o empilhamento
 push(): enpilha a tela sobre a interior
 back(): remove a tela atual e retorna a tela anterior empilhada
 replace(): subtitui uma tela por outra*/

import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

 export default function AuthLayout(){
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index" options={{title: "login"}}/>
            {/* <Stack.Screen name="register" />  options={{title: "cadastro"}} */ }
            {/* <Stack.Screen name="resetPassord" />  options={{title: "Esqueci minha senha"}} */ }  
        </Stack>
    )
 }