import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faBolt, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useFocusEffect } from "@react-navigation/native";
export default function CamaraScreen({ navigation }: any) {
  //------------------------SET GENERALES--------------------------
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const camaraRef = useRef<any>(null);
  const [image, setImage] = useState(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  //------------------------FUNCIONES PRINCIPALES--------------------------
  const tomarFoto = async () => {
    if (camaraRef && camaraRef.current) {
      try {
        const data = await camaraRef.current.takePictureAsync();
        navigation.navigate("PrePost", { uri: data.uri });
      } catch (error) {}
    }
  };

  //------------------------PROCESOS--------------------------
  useEffect(() => {
    camaraRef.current.resumePreview();
    console.log("recarga cam");
    return () => {
      // Lógica de limpieza si es necesario
    };
  }, []);

  return (
    <View style={styles.contenedorPrincipal}>
      <Camera
        style={styles.camara}
        type={type}
        flashMode={flash}
        ref={camaraRef}
        ratio="16:9"
      ></Camera>
      <View style={styles.footerBotonesCamara}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faBolt} size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={tomarFoto} style={{ marginHorizontal: 60 }}>
          <FontAwesomeIcon icon={faCircle} size={70} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faRotate} size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    borderWidth: 3,
    backgroundColor: "transparent",
  },
  footerBotonesCamara: {
    borderWidth: 2,
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    grow: 10,
    marginBottom: 20,
    zIndex: 9999,
    alignItems: "center",
  },
  camara: {
    backgroundColor: "#0000004f",
    flex: 1,
  },
});
