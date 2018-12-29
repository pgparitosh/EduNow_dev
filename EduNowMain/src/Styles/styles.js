import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default {
  container: {
    backgroundColor: "#FFF"
  },
  logo: {
    flex: 1,
    alignSelf: "center"
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    alignSelf: "center"
  },
  header: {
    flex: 1,
    padding: 20
  },
  screenHeader: {
    backgroundColor: "green",
    fontColor: "white"
  },
  alignCenter: {
    alignSelf: "center"
  },
  textWhite: {
    color: "white"
  },
  textGreen: {
    color: "green"
  },
  questionText: {
    fontSize: 20,
    color: "green",
    padding: 20,
    fontWeight: "bold"
  },
  questionContainer: {
    backgroundColor: "#efefef"
  },
  padding20: {
    padding: 20
  },
  margin10: {
    margin: 10
  },
  bgGreen: {
    backgroundColor: "green"
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
    color: "green"
  },
  bgYellow: {
    backgroundColor: "f0ad4e"
  }
};
