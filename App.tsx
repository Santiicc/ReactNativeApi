/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

function App(): React.JSX.Element {
  const [Campo, setCampo] = useState("Nulo");
  const [texto, setTexto] = useState('');
  const [img, setImg] = useState<string | undefined>(undefined);

  const handleChangeText = (newText: string) => {
    setCampo(newText);
  };

  const handleButtonPress = async () => {
    setTexto(Campo);
    const dogImage = await getdog();
    setImg(dogImage.url);
  };

  const getDogs = async () => {
    const url = "https://random.dog/woof.json";
    try {
      const response = await fetch(url);
      if (response.ok) {
        const payload = await response.json();
        return payload;
      } else {
        console.error("An error happened");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getdog = async () => {
    const dogData = await getDogs();
    return dogData;
  };

  return (
    <SafeAreaView >
      <View>
        <Text style={styles.Titulo}>Esto es una prueba de react Native</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          placeholder="Ingresa el texto"
        />
        <Button title='prueba' onPress={handleButtonPress} />
      </View>
      <View>
        <Text style={styles.SdoTitulo}>Texto Agregado</Text>
        <Text style={styles.Card}>{texto}</Text>
      </View>
      <View>
        {img && (
          <Image
            source={{ uri: img }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  Titulo: {
    textAlign: "center",
    color: "blue",
    fontSize: 15,
  },
  Card: {
    textAlign: "center",
    color: "blue",
    fontSize: 15,
    borderWidth: 2,
    margin: 14,
  },
  SdoTitulo: {
    margin: 14,
    textAlign: "center",
    color: "red",
    fontSize: 13,
    borderWidth: 0.5,
  },
  image: {
    width: 300,
    height: 300,
    margin: 14,
  },
});

export default App;
