
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Alert, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/passwordField";
import { global } from "../ui/styles";
import TextField from "../ui/textFild";


function isValidEmail(email: string) {
    return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}


const RenderRegister = () => {
    const router = useRouter();
     const { signIn } = useAuth();
 
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpf, setCpf] = useState("");       // só números
    const [telefone, setTelefone] = useState(""); // só números
    const [touched, setTouched] = useState<{
        nome?: boolean;
        cpf?: boolean;
        telefone?: boolean;
        email?: boolean;
        password?: boolean;
        confirmPassword?: boolean;

    }>({});



    // ----------- VALIDACOES -----------
    const errors = useMemo(() => {
        const error: Record<string, string> = {};

        // Nome
        if (!nome.trim()) error.nome = "Nome obrigatório";

        // CPF
        if (!cpf) error.cpf = "CPF obrigatório";
        else if (cpf.length !== 11) error.cpf = "CPF deve ter 11 dígitos";

        // Telefone
        if (!telefone) error.telefone = "Telefone obrigatório";
        else if (telefone.length !== 10 && telefone.length !== 11)
            error.telefone = "Telefone deve ter 10 ou 11 dígitos";

        // Email
        if (!email.trim()) error.email = "Email obrigatório";
        else if (!isValidEmail(email)) error.email = "Email inválido";

        // Senha
        if (!password) error.password = "Senha obrigatória";
        else if (password.length < 6) error.password = "Mínimo 6 caracteres";

        // Confirmação
        if (!confirmPassword) error.confirmPassword = "Confirme a senha";
        else if (confirmPassword !== password)
            error.confirmPassword = "As senhas não coincidem";

        return error;
    }, [nome, cpf, telefone, email, password, confirmPassword]);

    // ----------- HABILITAR BOTÃO -----------
    const canSubmit =
        nome &&
        cpf &&
        telefone &&
        email &&
        password &&
        confirmPassword &&
        Object.keys(errors).length === 0 &&
        !loading;

    // ----------- SUBMIT -----------
    const handleSubmit = async () => {
        if (!canSubmit) {
            console.log("Não pode submeter. Erros:", errors);
            console.log("Valores:", { nome, cpf, telefone, email, password });
            return;
        }

        setLoading(true);
        console.log("Tentando cadastrar com:", { nome, cpf, telefone, email });

        try {
            await signIn({
                nome: nome.trim(),
                cpf,
                telefone,
                email: email.trim(),
                senha: password,
            });
            Alert.alert("Sucesso", "Conta criada!");
            router.replace("/(tabs)/explorer");
        } catch (err: any) {
            console.log("Erro no signUp:", err);
            Alert.alert("Erro", err.message || "Falha ao criar conta");
        } finally {
            setLoading(false);
        }
    };

    const { height } = Dimensions.get("window");
    return (

        <AuthContainer
            title="Cadastre-se agora!"
            icon="hotel">

            <TextField
                label="Nome"
                placeholder="digite eu nome"
                value={nome}
                onChangeText={setNome}
                onBlur={() => setTouched({ ...touched, nome: true })}
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
                value={email}
                onChangeText={setEmail}
                onBlur={() => setTouched({ ...touched, email: true })}
            />

            <PasswordField
                label="Senha"
                icon={{ lib: "MaterialIcons", name: "lock" }}
                placeholder="*********"
                value={password}
                onChangeText={setPassword}
                onBlur={() => setTouched({ ...touched, password: true })}
            />

            <PasswordField
                label="Confirme sua senha"
                icon={{ lib: "MaterialIcons", name: "lock" }}
                placeholder="*********"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onBlur={() => setTouched({ ...touched, confirmPassword: true })}
            />

             <TouchableOpacity
                      style={[global.primayButton, { marginTop: 10 }]}
                      onPress={handleSubmit}
                      disabled={!canSubmit}
                    >
                      <Text style={global.primaryButtonText}>Criar Conta</Text>
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
