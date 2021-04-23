import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { Constants } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../Styles";
import moment  from "moment";

const Servicios = () => {
  //
  const [DATA, setData] = useState({});
  // URL
  const URL = Constants.URL_BASE + "api/v1/client/history/services";
  // LLamada a la API
  const DatoServicios = async (url) => {
    try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setData(await resultado.data.services.data);
      //   console.log(DATA);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    DatoServicios(URL);
  }, []);

  /*
    Pendiente:  AZUL
    Completado: VERDE,
    Devuelto: Naranja
    DATOS{
        id,
        status_paid: "pending"
        origin_address: "Miguel de Unamuno 1-25, Cuenca, Ecuador",
        destination_address: "Pedro Alvarez Cabral 566, Cuenca, Ecuador",
        service_end_at: "2021-01-07T11:44:00.000000"
        hired->offer: "1500.00",
        hired->driver->name: "amisael",
        hired->driver->last_name: "mcm",
        hired->driver->photo: "users/images/1610037953-photo-0.jpeg"
    }
    */
  const CardServicios = ({ datos }) => {
    const {
      id,
      status,
      status_paid,
      origin_address,
      destination_address,
      service_end_at,
    } = datos;
    const fecha = new Date(service_end_at);
    if (datos.hired) {
      //   console.log(datos);
      const { name, last_name, photo } = datos.hired.driver;
      const urlFoto = `${URL}/${photo}`;
      return (
        <> 
          <View style={styles.containerCard} key={id}>
            <View style={styles.headerCard}>
              <View style={styles.infoPersona}>
                <Image source={{ uri: urlFoto }} style={styles.imgPersona} />
                <Text style={styles.nombrePersona}>
                  {name + " " + last_name}
                </Text>
              </View>
              <View style={styles.infoPago}>
                <Text
                  style={
                    status_paid == "approved"
                      ? styles.pagoCompleto
                      : status_paid == "pending"
                      ? styles.pagoPendiente
                      : status == "cancelled"
                      ? styles.pagoDevuelto
                      : null
                  }
                >
                  {"$" + datos.hired.offer}
                </Text>
                <Text
                  style={
                    status_paid == "approved"
                      ? styles.txtCompleto
                      : status_paid == "pending"
                      ? styles.txtPendiente
                      : status == "cancelled"
                      ? styles.txtDevuelto
                      : null
                  }
                >
                  {status_paid == "approved"
                    ? "Completado"
                    : status_paid == "pending"
                    ? "Pendiente"
                    : status == "cancelled"
                    ? "Devuelto"
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.contentCard}>
              <View style={styles.direccionInfo}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  color={Constants.yellow}
                />
                <Text style={styles.txtDireccion}>{origin_address}</Text>
              </View>
              <View style={styles.direccionInfo}>
                <Ionicons
                  name="location-outline"
                  size={24}
                  color={Constants.menu_tab_color}
                />
                <Text style={styles.txtDireccion}>{destination_address}</Text>
              </View>
              <View styles={styles.fechaInfo}>
                <Text style={styles.txtFecha}>
                  {" "}
                  {//fecha.toLocaleDateString('en-GB')}{" "}
                    moment(fecha, 'YYYYMMDD').format('DD/MM/YYYY')
                    }
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
        </>
      );
    }
    return <View style={{ flex: 1 }} />;
  };

  const RenderItem = ({ item }) => {
    return <CardServicios datos={item} />;
  };

  return (
    <SafeAreaView style={styles.containerServicio}>
      {DATA.length == undefined ? (
        <ActivityIndicator size="large" color={Constants.yellow} />
      ) : (
        <FlatList
          data={DATA}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Servicios;
