import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Alumno({ nombre, matricula }) {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.imagePlaceholder} />
        
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{nombre}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setShow(!show)}
        >
          <Text style={styles.buttonText}>▼</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <View style={styles.dropdown}>
          <Text>Matrícula: {matricula}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 25,
    marginRight: 10,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  dropdown: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
  },
});