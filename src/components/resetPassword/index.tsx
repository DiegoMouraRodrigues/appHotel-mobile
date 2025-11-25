
import { useRouter } from "expo-router";
import { Text, TouchableOpacity} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/textFild";
import { global } from "../ui/styles";

const RenderResetPassword = () => {
    const router = useRouter();

    return (
        <AuthContainer
            
            title="Redefinição de senha"
            subtitle="Digite seu email para receber e redefinir sua senha"
            icon="hotel">
    
             <TextField
                label="Seu E-mail"
                icon={{lib: "MaterialIcons", name: "email"}}
                placeholder="user@email.com"
                keyboardType="email-address"
            />

        <TouchableOpacity style={[global.primayButton]}>
            <Text style={global.primaryButtonText}>Enviar e-email</Text>
         </TouchableOpacity>
        </AuthContainer>
    )};
export default RenderResetPassword;