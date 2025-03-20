import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ContadorDeCliques = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Button title={`Cliques: ${contador}`} onPress={incrementarContador}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContadorDeCliques;
