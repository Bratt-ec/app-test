import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Constants } from "../constants";
import { styles } from "../Styles";
import moment  from "moment";


const Pagos = () => {
  const [DATA, setData] = useState({});
  // URL
  const URL = Constants.URL_BASE + "api/v1/client/history/payments";
  // LLamada a la API

  const DatoPagos = async (url) => {
    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setData(await resultado.data.services.data);
    } catch (error) {
      console.log("érror: " + error);
    }
  };

  useEffect(() => {
    DatoPagos(URL);
  }, []);

  /*
    id,
    transaction_amount: "1500.00",
    status: "approved",
    updated_at: "2021-01-07T16:52:36.000000Z",
    */
  const CardPagos = ({ datos }) => {
    const { transaction_amount, status, updated_at } = datos;
    const fecha = new Date(updated_at);
    return (
      <View style={styles.ContenedorCard}>
        <View style={styles.infoTransaccion}>
          <Text style={styles.texto}>Transacción</Text>
          <Text style={styles.fecha}>{  moment(fecha, 'YYYYMMDD').format('DD/MM/YYYY')}</Text>
        </View>
        <View style={styles.infoPago2}>
          <Text
            style={
              status == "approved"
                ? styles.pagoCompleto
                : status == "pending"
                ? styles.pagoPendiente
                : status == "denied"
                ? styles.pagoDevuelto
                : null
            }
          >
            ${transaction_amount}
          </Text>
          <Text
            style={
              status == "approved"
                ? styles.txtCompleto
                : status == "pending"
                ? styles.txtPendiente
                : status == "denied"
                ? styles.txtDevuelto
                : null
            }
          >
            {status == "approved"
              ? "Completado"
              : status == "pending"
              ? "Pendiente"
              : status == "denied"
              ? "Devuelto"
              : null}
          </Text>
        </View>
      </View>
    );
  };

  const RenderItem = ({ item }) => {
    return <CardPagos datos={item} />;
  };
  if (DATA.length == undefined) {
    return <ActivityIndicator size="large" color={Constants.yellow} />;
  } else {
    return (
      <SafeAreaView style={styles.containerPagos}>
        <FlatList
          data={DATA}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
};

export default Pagos;
