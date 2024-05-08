import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

export default function Home(){
  return(
    <View style={styles.contaner}>
      <Text style={styles.textD}>SportsHub</Text>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.textButton}>GERENTE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.textButton}>FUNCIONARIO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.textButton}>USUARIO</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contaner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textD: {
    marginBottom: 200,
    fontSize: 65,
    color: '#8D86C9',
    textAlign: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: '#F7ECE1',
    fontSize: 20,
  },
  Button: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: 215,
    height: 45,
    marginBottom: 40,
    borderRadius: 25,
    backgroundColor: '#8D86C9'
  }
})