import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeView from "../views/homeView";
import AddressView from "../views/addressView";
import Home from "../containers/Home";
import PageProductos from "../containers/PageProducts";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio Drawer" component={Home} />
      <Drawer.Screen name="Productos" component={PageProductos} />
    </Drawer.Navigator>
  );
}
