import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Pagos from "./src/components/Pagos";
import Servicios from "./src/components/Servicios";
import { Constants } from "./src/constants";
import { useFonts } from "@use-expo/font";
import { styles } from "./src/Styles";

export default function App() {
  const [nav, setNav] = useState(1);
  // require in the font
  let [fontsLoaded] = useFonts({
    Nexa: require("./assets/fonts/NexaBold.ttf"),
  });

  return !fontsLoaded ? (
    <ActivityIndicator size="large" color={Constants.yellow} />
  ) : (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={Constants.yellow} />
      <View style={styles.headerText}>
        <Text style={styles.header}>historial</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.opMenu} onPress={() => setNav(1)}>
          <Text style={nav == 2 ? styles.txtInactiveMenu : styles.txtMenu}>
            SERVICIO
          </Text>
        </TouchableOpacity>
        <View style={styles.linea} />
        <TouchableOpacity style={styles.opMenu} onPress={() => setNav(2)}>
          <Text style={nav == 1 ? styles.txtInactiveMenu : styles.txtMenu}>
            Pagos
          </Text>
        </TouchableOpacity>
      </View>
      {nav == 1 ? <Servicios /> : <Pagos />}
    </View>
  );
}
