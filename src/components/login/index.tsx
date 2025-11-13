import TextField from "../ui/textFild";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/passwordField";
import { TouchableOpacity, Text } from "react-native";
import { global } from "../ui/styles";

const RenderLogin = () =>{
    return (
             <AuthContainer
                title="Bem-vindo"
                subtitle="Faça seu login para continuar!"
                icon="hotel">
            
                {/*children*/ }
                <TextField
                    label="E-email"
                    icon="email"
                    placeholder="user@email.com"
                    keyboardType="email-address"
                />
               

                 <PasswordField
                    label="senha"
                    icon="lock"
                    placeholder="********"
                />

            <TouchableOpacity style={[global.primayButton]}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>

            </AuthContainer>
            
    )
};

export default RenderLogin;