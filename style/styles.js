import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  footer: {
    backgroundColor: "#293040",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 12,
  },
  aloitus: {
    backgroundColor: "#E3E5E5",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  etusivuText: {
    paddingVertical: 20,
    fontWeight: 'bold',
    fontSize: 17,
  },
  kirjautuminen: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tulos: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "blue",
  },
  pressable: {
    height: 60,
    width: 160,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#1C3659",
    borderWidth: 1,
    borderColor: "4D6687",
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 10,
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  containerLabel: {
    flexDirection: "row",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  containerMaps: {
    width: Dimensions.get("window").width,
    height: "65%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  container2: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F7F2E0",
  },
  content2: {
    flex: 1,
  },
  input2: {
    borderColor: "#6E6E6E",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer2: {
    marginBottom: 10,
  },
  listItem2: {
    backgroundColor: "f0f0f0",
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
  },
  listItemText2: {
    fontSize: 16,
  },
  stopItem2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  mapContainer2: {
    height: 300,
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
  },
  map2: {
    height: "100%",
    width: "100%",
  },
  containerRow: {
    flexDirection: "row",
  },
  containerforecast: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 10,
  },
  textrforecast: {
    textAlign: "center",
  },
  icon: {
    width: 50, // Määrittele kuvalle leveys
    height: 50, // Määrittele kuvalle korkeus
    alignSelf: "center",
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    //marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  logo: {
    height: 200,
    width: windowWidth,
  },
  bussitContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F7F2E0",
  },
  content: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "#e6e1cf",
    borderColor: "#6E6E6E",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 8,
  },
  headsign: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F7F2E0",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTextInput: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  laatikko: {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  distanceText: {
    paddingTop: 20,
  }
});
