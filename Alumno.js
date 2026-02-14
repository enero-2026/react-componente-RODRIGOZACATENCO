import { StyleSheet, Text, View, Button } from 'react-native';
 
export default function Alumno(props){
                                     
return(
   <View>
      <Text >{props.nombre}</Text>
      <Text>Matrícula: {props.matricula}</Text>
</View>
)
}