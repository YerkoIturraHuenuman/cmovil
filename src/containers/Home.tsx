import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={{ marginBottom: 20 }}>
        Este es el home del sitio con drawer
      </Text>
      <View>
        <TouchableOpacity
          style={{
            padding: 20,
            marginBottom: 20,
            backgroundColor: "#7d1ad9",
            borderRadius: 4,
          }}
          onPress={() => navigation.navigate("Productos")}
        >
          <Text style={{ color: "#ffff", textAlign: "center" }}>
            Ver Productos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    paddingTop: 40,
    paddingBottom: 78,
    paddingHorizontal: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: "black",
  },
});
