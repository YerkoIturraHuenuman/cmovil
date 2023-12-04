import React, { useState, useEffect, useRef } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus, faLocationDot } from "@fortawesome/free-solid-svg-icons";

//--------------------------------------------------------------------------------------

export default function Home({ navigation }: any) {
  //------------------------SET GENERALES--------------------------

  //------------------------FUNCIONES PRINCIPALES--------------------------
  useEffect(
    () =>
      navigation.addListener("focus", () => {
        console.log("home");
      }),
    [, navigation]
  );
  //------------------------PROCESOS--------------------------
  const handleCamara = () => {
    navigation.navigate("CamaraScreen");
  };
  return (
    <View style={styles.body}>
      <View style={styles.contenedorPrincipal}>
        <View style={styles.headerPublicacion}>
          <Image
            source={require("../../assets/bass/fotoPerfil1.jpg")}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nombreUserPublicacion}>Maria Gonazales</Text>
        </View>
        <Image
          source={require("../../assets/bass/fotoPublicacion.jpg")}
          style={styles.fotoPublicacion}
        />
        <View style={styles.footerPublicacion}>
          <View style={{}}>
            <FontAwesomeIcon icon={faLocationDot} size={20} color="#5bee00" />
          </View>
          <Text style={styles.textUbicacion}>
            C. Dr. Sotero del Rio 1241-1201, La Florida, Región Metropolitana
          </Text>
          <TouchableOpacity style={styles.botonMapa}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Mapa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contenedorBotonesPrincipales}>
        <TouchableOpacity
          onPress={handleCamara}
          style={{ elevation: 20, shadowColor: "#000" }}
        >
          <FontAwesomeIcon icon={faCirclePlus} size={60} color="#32b403" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 120,
    paddingBottom: 78,
    backgroundColor: "#fff",
    flex: 1,
  },
  contenedorPrincipal: {
    borderTopWidth: 1,
    borderTopColor: "#F1F1F1",
    flex: 1,
  },
  headerPublicacion: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  fotoPerfil: {
    width: 55,
    height: 55,
    objectFit: "cover",
    borderRadius: 100,
  },
  nombreUserPublicacion: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15,
  },
  fotoPublicacion: {
    marginTop: 20,
    width: "100%",
    height: 400,
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
  botonMapa: {
    backgroundColor: "#5bee00",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 7,
  },
  contenedorBotonesPrincipales: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
