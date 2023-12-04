import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useRoute } from "@react-navigation/native";
export default function PrePost({ navigation }: any) {
  //------------------------SET GENERALES--------------------------

  //------------------------FUNCIONES PRINCIPALES--------------------------

  //------------------------PROCESOS--------------------------
  const route = useRoute();
  const image = (route.params as { uri?: string })?.uri;
  return (
    <View style={styles.contenedorPrincipal}>
      <Image source={{ uri: image }} style={styles.fotoTomada} />
      <View style={styles.footerPublicacion}>
        <View style={{}}>
          <FontAwesomeIcon icon={faLocationDot} size={20} color="#5bee00" />
        </View>
        <Text style={styles.textUbicacion}>
          C. Dr. Sotero del Rio 1241-1201, La Florida, Región Metropolitana
        </Text>
      </View>
      <View style={styles.contenedorBotones}>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.botonCancelar}
        >
          <Text
            style={{
              color: "#5bee00",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Cancelar
          </Text>
        </Pressable>
        <TouchableOpacity style={styles.botonSubir}>
          <Text
            style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}
          >
            Subir
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contenedorPrincipal: {
    paddingTop: 120,
    paddingBottom: 78,
    backgroundColor: "#fff",
    flex: 1,
  },
  fotoTomada: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  footerPublicacion: {
    paddingHorizontal: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textUbicacion: {
    marginHorizontal: 10,
    flex: 1,
  },
  contenedorBotones: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 40,
  },
  botonSubir: {
    backgroundColor: "#5bee00",
    width: 110,
    paddingVertical: 15,
    borderRadius: 7,
    borderColor: "#5bee00",
  },
  botonCancelar: {
    backgroundColor: "transparent",
    width: 110,
    paddingVertical: 15,
    borderRadius: 7,
    borderColor: "#5bee00",
    borderWidth: 2,
  },
});
