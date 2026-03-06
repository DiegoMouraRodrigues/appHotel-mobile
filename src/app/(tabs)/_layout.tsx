{/* Função: definir o fluxo de navegação entre as telas disponíveis em Tab Navigator:
   Explorar, Reservas, Perfil */}
import { useAuth } from "@/contexts/AuthContext";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";

const TabLayout = () => {
  const { token, isLoading } = useAuth();

  if (isLoading) {
    return null; // ou um <LoadingSpinner /> se preferir
  }

  if (!token) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#420350ff",
        tabBarInactiveTintColor: "#7c7c7cff",
        headerShown: false,
        tabBarStyle: { backgroundColor: "#fef6ffff" },
      }}
    >
      <Tabs.Screen
        name="explorer"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (  // adicione size para consistência
            <FontAwesome name="search" size={size || 25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="reservations"
        options={{
          title: "Reservar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bag-suitcase"
              size={size || 25}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="account"  // certifique-se que a pasta/arquivo é exatamente "account" (sem typo)
        options={{
          title: "Minha conta",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"  // ← MUDE PARA ESTE (veja explicação abaixo)
              size={size || 25}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;