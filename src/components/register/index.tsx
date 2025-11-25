
import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/passwordField";
import { global } from "../ui/styles";
import TextField from "../ui/textFild";

const RenderRegister = () => {
    const router = useRouter();

    const {  height } = Dimensions.get("window");
    return (
        
        <AuthContainer    
            
            title="Cadastre-se agora!"
            icon="hotel">

            <TextField
                label="Nome"
                placeholder="digite eu nome"
            />

             <TextField
                label="CPF"
                placeholder="111.111.111-11"
            />
            
             <TextField
                label="Telefone"
                placeholder="55 5555-5555"
            />

             <TextField
                label="E-mail"
                icon={{lib: "MaterialIcons", name: "email"}}
                placeholder="user@email.com"
                keyboardType="email-address"
            />

            <PasswordField
                label="Senha"
                icon={{lib: "MaterialIcons", name: "lock"}}
                placeholder="*********"
            />

            <PasswordField
                label="Confirme sua senha"
                icon={{lib: "MaterialIcons", name: "lock"}}
                placeholder="*********"
            />

        <TouchableOpacity style={[global.primayButton]}>
            <Text style={global.primaryButtonText}>Criar conta</Text>
        </TouchableOpacity>
                 <View style={{alignItems: "center", marginTop: height * 0.01}}></View>
         <TouchableOpacity onPress={() => router.push("/(auth)/login")}style={{ marginTop: height * 0.03}}>
                <Text style={{color: "#1f1e1eff", fontWeight: 600, fontSize: 17,}}>Não possui uma conta?
                    faça login
                </Text>
         </TouchableOpacity>
        </AuthContainer>
    )};
export default RenderRegister;