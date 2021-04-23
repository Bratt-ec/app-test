import { StyleSheet } from "react-native";
import { Constants } from "./constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.color_bg,
  },
  headerText: {
    backgroundColor: Constants.header_color,
    alignItems: "center",
    padding: 16,
    paddingTop: "16%",
  },
  header: {
    color: "black",
    fontSize: Constants.font_size,
    textTransform: "capitalize",
    fontFamily: "Nexa",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 20,
  },
  opMenu: {
    // padding: ,
  },
  linea: {
    backgroundColor: Constants.yellow,
    height: 25,
    width: 2,
    marginHorizontal: -90,
  },
  txtMenu: {
    fontFamily: "Nexa",
    fontSize: Constants.font_size,
    textTransform: "capitalize",
    color: "black",
  },
  txtInactiveMenu: {
    fontFamily: "Nexa",
    fontSize: Constants.font_size,
    color: Constants.inactive_tab_color,
    textTransform: "capitalize",
  },
  tabMenu:{
    alignSelf: 'center',

  },
  tabImg:{
    width: 40,
    height: 40,
    backgroundColor: 'blue'
  },
  tabOpciones:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    display:'flex',
  },


  // SERVICIOS STYLES
  containerServicio: {
    backgroundColor: Constants.color_bg,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCard: {
    width: "92%",
    backgroundColor: Constants.color_bg,
    shadowColor: Constants.shadow_color,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    padding: 12,
    margin: 10,
    marginVertical: 17,
    borderRadius: Constants.radio_size,
    alignSelf: "center",
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  infoPersona: {
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Nexa",
  },
  imgPersona: {
    borderRadius: 100,
    width: 40,
    height: 40,
    marginRight: 10,
    backgroundColor: Constants.yellow,
  },
  nombrePersona: {
    fontSize: Constants.font_size,
    // fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Nexa",
  },
  infoPago: {
    alignItems: "flex-end",
    marginRight: 10
  },
  pagoCompleto: {
    color: Constants.green,
    fontSize: Constants.font_size,
    fontFamily: "Nexa",
  },
  pagoPendiente: {
    color: Constants.blue,
    fontSize: Constants.font_size,
    fontFamily: "Nexa",
  },
  pagoDevuelto: {
    color: Constants.orange,
    fontSize: Constants.font_size,
    fontFamily: "Nexa",
  },
  txtCompleto: {
    color: Constants.green,
    fontSize: 10,
    fontFamily: "Nexa",
  },
  txtPendiente: {
    color: Constants.blue,
    fontSize: 10,
    fontFamily: "Nexa",
  },
  txtDevuelto: {
    color: Constants.orange,
    fontSize: 10,
    fontFamily: "Nexa",
  },
  contentCard: {
    alignItems: "flex-start",
    // padding: 10,
    paddingBottom: 16,
  },
  direccionInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    marginVertical: 2,
    fontFamily: "Nexa",
  },
  txtDireccion: {
    width: 280,
    fontSize: Constants.detail_size,
    // color: Constants.inactive_tab_color,
    fontFamily: "Nexa",
  },
  fechaInfo: {},
  txtFecha: {
    color: Constants.inactive_tab_color,
    paddingLeft: 22,
    fontFamily: "Nexa",
  },
  line: {
    width: "100%",
    height: 0.5,
    backgroundColor: Constants.line_color,
  },

  // STYLES PAGOS
  containerPagos: {
    backgroundColor: Constants.color_bg,
    flex: 1,
  },
  ContenedorCard: {
    width: "90%",
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: Constants.line_color,
    alignSelf: "center",
    marginTop: 12,
  },
  infoTransaccion: {},
  texto: {
    fontSize: 13,
    fontFamily: "Nexa",
    marginBottom: 4
  },
  fecha: {
    fontSize: 13,
    color: Constants.inactive_tab_color,
    fontFamily: "Nexa",
  },
  infoPago2: {
    alignItems: "flex-end",
  },
});
