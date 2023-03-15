import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image } from 'react-native'
import estilo from './src/style.js';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style ={estilo.container}>
      <LinearGradient
        colors ={['purple','steelblue']}
        style = {estilo.gradientBackground}
      >
      
      

      </LinearGradient>
      

        <View style = {estilo.box}>
          <Text style={estilo.text}>Tela de login</Text>
          <View style={estilo.icons}>
          <Feather name="user" size={24} color="black" />
          <TextInput style={estilo.input} placeholder = 'email'/>
          <Ionicons name="key-outline" size={24} color="black" />
          <TextInput style={estilo.input} placeholder = 'senha'/>
        </View>

          <TouchableOpacity placeholder style ={{width:'20%', height:20,}}>
            <LinearGradient
                colors ={['steelblue','purple']}
                style ={estilo.button}
            >
            <Text style={estilo.text2}>salvar</Text>
            </LinearGradient>

          </TouchableOpacity>

        </View>
      <Image
        source={require('./src/img/cave.jpg')}
        style ={{height:400,width:400,marginTop:10}}
        
      />

    </View>
  );
}


