import { StyleSheet, Text, View } from 'react-native'

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      gradientBackground:{
          position: 'absolute',
          left:0,
          right:0,
          height:'100%',
          alignItems:'center',
          justifyContent:'center',
      },
      box:{
          marginTop:10,
          alignItems:'center',
          borderRadius:30,
          backgroundColor:'white',
          width:'85%',
          height:400,
      },
      text:{
        fontSize:50,
        fontWeight:'bold'
      },
      text2:{
        fontSize:30,
      },
      input:{
          marginTop:15,
          fontSize:30,
          borderRadius:10,
          borderColor:'black',
          borderWidth:2,
      },
      icons:{
          width:'80%',
          marginTop:10,
          justifyContent:'center',
          alignItems:'left',

      },
      button:{
          padding:20,
          marginTop:10,
          alignItems:'center',
          borderRadius:20,
      },
      image:{
          height:100,
          width:100,
      }

})
export default estilo;
