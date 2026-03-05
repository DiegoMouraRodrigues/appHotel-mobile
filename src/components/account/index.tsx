import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from "../ui/textFild";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";

const RenderAccount = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");

  const {signOut} = useAuth();
  const router = useRouter();
  const logout = async () =>{
    await signOut();
    router.replace("/(auth)");
  };


  {/*modal para  alteração de senha*/}
  const [exibirModalSenha, setExibirModalSenha] = useState(false);
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");


  return (
    <AuthContainer>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 24,
          textAlign: "center",
          color: "#333",
        }}
      >
        Minha Conta
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "#666",
          marginBottom: 20,
        }}
      >
        Gerencie seus dados e altere suas informações
      </Text>


      <TextField
        label="Nome:"
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
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
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={{ marginTop: 20, gap: 12 }}>  {/* ou gap: 16, 20... */}
        <TouchableOpacity style={global.primayButton}>
          <Text style={global.primaryButtonText}>Alterar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={global.primayButton}
          onPress={() => setExibirModalSenha(true)}
        >
          <Text style={global.primaryButtonText}>Alteração de senha</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={global.primayButton}
          onPress={logout}
        >
          <Text style={global.primaryButtonText}>Sair</Text>
        </TouchableOpacity>

         
      </View>

      {/* Modal de senha (mantido igual) */}
      {exibirModalSenha && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setExibirModalSenha(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setExibirModalSenha(false)}
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={(e) => e.stopPropagation()}
              style={{
                width: "86%",
                maxWidth: 400,
                backgroundColor: "#fff",
                borderRadius: 16,
                padding: 26,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 24,
                  textAlign: "center",
                }}
              >
                Alterar Senha
              </Text>

              <TextField
                label="Senha antiga"
                value={senhaAntiga}
                onChangeText={setSenhaAntiga}
                secureTextEntry
                style={{ height: 45 }}
              />

              <TextField
                label="Nova senha"
                value={novaSenha}
                onChangeText={setNovaSenha}
                secureTextEntry
                style={{ height: 45 }}
              />

              <TextField
                label="Confirme a nova senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
                style={{ height: 45 }}
              />

              <TouchableOpacity
                onPress={() => {
                  if (!senhaAntiga || !novaSenha || !confirmarSenha) {
                    alert("Preencha todos os campos!");
                    return;
                  }
                  if (novaSenha !== confirmarSenha) {
                    alert("As senhas novas não coincidem!");
                    return;
                  }
                  if (novaSenha.length < 6) {
                    alert("A nova senha deve ter pelo menos 6 caracteres!");
                    return;
                  }

                  console.log("Alterando senha:", { senhaAntiga, novaSenha });

                  setSenhaAntiga("");
                  setNovaSenha("");
                  setConfirmarSenha("");
                  setExibirModalSenha(false);
                  alert("Senha alterada com sucesso!");
                }}
                style={{
                  backgroundColor: "#007AFF",
                  paddingVertical: 14,
                  borderRadius: 8,
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                  Salvar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setExibirModalSenha(false);
                  setSenhaAntiga("");
                  setNovaSenha("");
                  setConfirmarSenha("");
                }}
              >
                <Text style={{ color: "#007AFF", fontSize: 16, textAlign: "center" }}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      )}
    </AuthContainer>


  );
};

export default RenderAccount;

