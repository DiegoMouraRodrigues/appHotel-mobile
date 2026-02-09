import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from "../ui/textFild";

const RenderAccount = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");       
  const [telefone, setTelefone] = useState("");
  const [alterarSenha, setAlterarSenha] = useState(false);
  

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

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity style={global.primayButton}>
          <Text style={global.primaryButtonText}>Alterar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAlterarSenha(alterarSenha)}
         style={[global.primayButton, { marginTop: 10 }]}>
          <View>
            <Text style={global.primaryButtonText}>Alterar senha

            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </AuthContainer>
  );
};

export default RenderAccount;

