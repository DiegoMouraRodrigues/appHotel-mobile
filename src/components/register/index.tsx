
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Alert, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/passwordField";
import { global } from "../ui/styles";
import TextField from "../ui/textFild";


function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}


const RenderRegister = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setcpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{ email?: boolean; password?: boolean; nome?: boolean; cpf?: boolean; telefone?: boolean; confPassword?: boolean }>({});



    const errors = useMemo(() => {
        const errors: Record<string, string> = {};
        if (touched.email && !email) errors.email = "O e-mail é obrigatório.";
        if (touched.email && email && !isValidEmail(email)) errors.email = "O e-mail é inválido, Digite um e-mail válido.";
        if (touched.password && !password) errors.password = "A senha é obrigatória.";
        if (touched.password && password && password.length < 6) errors.password = "A senha deve ter no mínimo 6 caracteres.";
        if (touched.nome && !nome) errors.nome = "O nome é obrigatório.";
        if (touched.cpf && !cpf) errors.cpf = "O CPF é obrigatório.";
        if (touched.telefone && !telefone) errors.telefone = "O telefone é obrigatório.";
        if (touched.confPassword && !confPassword) errors.confPassword = "A confirmação de senha é obrigatória.";
        if (touched.confPassword && confPassword && confPassword !== password) errors.confPassword = "As senhas não coincidem.";
        return errors;
    }, [email, password, confPassword, nome, cpf, telefone, touched]);


    const canSubmit =
        email &&
        password &&
        nome &&
        cpf &&
        telefone &&
        confPassword &&
        Object.keys(errors).length === 0 &&
        !loading;


    const handleSubmit = async () => {
        try {
            setLoading(true);
            console.log("[REGISTER] Tentando registrar: ", {
                email: email,
                password: password,
                nome: nome,
                cpf: cpf,
                telefone: telefone
            });
            await new Promise((req) => setTimeout(req, 1500));

            Alert.alert("Cadastro realizado com sucesso!");
            router.replace("/(tabs)/explorer");

        }
        catch (erro) {
            Alert.alert("Erro", "Falha ao tentar cadastrar!");
        }
        finally {
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
                        onChangeText={(maskedValue, rawValue) => setcpf(rawValue || "")}
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
                value={confPassword}
                onChangeText={setConfPassword}
                onBlur={() => setTouched({ ...touched, confPassword: true })}
            />

            <TouchableOpacity
                style={[global.primayButton, loading && { opacity: 0.6 }]}
                onPress={handleSubmit}
                disabled={!canSubmit || loading}
            >
                <Text style={global.primaryButtonText}>
                    {loading ? "Cadastrando..." : "Cadastre-se"}
                </Text>
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
