import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your server URL
    fetch("http://localhost:3000/convertToJSON")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>JSON Data:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      {console.log(JSON.stringify(data, null, 2))}
    </View>
  );
};

export default App;
