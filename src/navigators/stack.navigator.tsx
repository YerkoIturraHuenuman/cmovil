import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../views/homeView";
import AddressView from "../views/addressView";
import Home from "../containers/Home";
import PageProductos from "../containers/PageProducts";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Address" component={PageProductos} />
    </Stack.Navigator>
  );
}
