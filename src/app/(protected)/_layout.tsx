import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { Slot } from "expo-router";
import { useAuth } from "@/presentation/contexts/AuthContext";
import Transacoes from "./Transacoes/Transacoes";
import Home from "./Home/Home";

const Drawer = createDrawerNavigator();

export default function App() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  const customScreenOptions: DrawerNavigationOptions = {
    headerStyle: { backgroundColor: "#004D61" },
    headerTintColor: "white",
    headerTitleAlign: "center",
  };

  return (
    <Drawer.Navigator screenOptions={customScreenOptions}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Transações" component={Transacoes} />
      <Drawer.Screen name="Sair" component={Logout} />
    </Drawer.Navigator>
  );
}

function Logout() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>Protected Layout</Text>
      <Slot />
    </View>
  );
}
