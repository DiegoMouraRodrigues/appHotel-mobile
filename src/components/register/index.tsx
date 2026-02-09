
import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/passwordField";
import { global } from "../ui/styles";
import TextField from "../ui/textFild";
import { Ionicons } from "@expo/vector-icons";
import { MaskedTextInput } from "react-native-mask-text";
import { useState } from "react";


const RenderRegister = () => {
    const router = useRouter();
    
    const [cpf, setCpf] = useState("");       // só números
      const [telefone, setTelefone] = useState(""); // só números
    

    const { height } = Dimensions.get("window");
    return (

        <AuthContainer
            headerLeft={
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={25} color="#aaa9a9ff" />
                </TouchableOpacity>
            }
            title="Cadastre-se agora!"
            icon="hotel">

            <TextField
                label="Nome"
                placeholder="digite eu nome"
            />
            {/* CPF – imita o TextField manualmente */}
            <View style={global.inputGroup}>
                <Text style={global.label}>CPF:</Text>
                <View style={global.inputIcon}>
                    <MaskedTextInput
                        mask="999.999.999-99"
                        value={cpf}
                        onChangeText={(maskedValue, rawValue) => setCpf(rawValue || "")}
                        placeholder="000.000.000-00"
                        placeholderTextColor="#9ca3af"
                        keyboardType="numeric"
                        style={[global.input, { flex: 1 }]}
                    />
                </View>
            </View>


            {/* Telefone – mesma estrutura */}
            <View style={global.inputGroup}>
                <Text style={global.label}>Telefone:</Text>
                <View style={global.inputIcon}>
                    <MaskedTextInput
                        mask="(99) 99999-9999"
                        value={telefone}
                        onChangeText={(maskedValue, rawValue) => setTelefone(rawValue || "")}
                        placeholder="(99) 99999-9999"
                        placeholderTextColor="#9ca3af"
                        keyboardType="numeric"
                        style={[global.input, { flex: 1 }]}
                    />
                </View>
            </View>

            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="user@email.com"
                keyboardType="email-address"
            />

            <PasswordField
                label="Senha"
                icon={{ lib: "MaterialIcons", name: "lock" }}
                placeholder="*********"
            />

            <PasswordField
                label="Confirme sua senha"
                icon={{ lib: "MaterialIcons", name: "lock" }}
                placeholder="*********"
            />

            <TouchableOpacity style={[global.primayButton]}>
                <Text style={global.primaryButtonText}>Criar conta</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginTop: height * 0.01 }}></View>
            <TouchableOpacity onPress={() => router.back()} style={{ marginTop: height * 0.03 }}>
                <Text style={{ color: "#1f1e1eff", fontWeight: 600, fontSize: 17, }}>Ja possui uma conta?
                    faça login
                </Text>
            </TouchableOpacity>
        </AuthContainer>
    )
};
export default RenderRegister;