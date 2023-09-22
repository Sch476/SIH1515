import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import Modal from "react-native-modal";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
