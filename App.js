import React, {Component} from 'react'

import{
View,
Text,
StyleSheet,
TouchableOpacity,
Image,
Touchable}
from 'react-native';

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    textoFrase:'',
    img:require('./assets/src/biscoito.png'),
  };
  
  this.quebraBiscoito= this.quebraBiscoito.bind(this);



  this.frases =[
    'persistência é o caminho do êxito',

    
   ' As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente',
    

   ' Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer',

    
   ' Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação',
    
    'Se está Ruim Nao se procupe pode piorar'
  ];



}

quebraBiscoito(){
let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

this.setState({
  textoFrase: '"' + this.frases[numeroAleatorio] + '"',
  
  img:require('./assets/src/biscoitoAberto.png')
})
 

}

render(){

return(
<View style={styles.container}>

<Image
  source={this.state.img}
  style={styles.img}

/>
<Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

<TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>

  <View style={styles.btnArea}>

<Text style={styles.btnTexto}>Quebrar Biscoito Da Sorte</Text>

  </View>
</TouchableOpacity>




</View>




);

}


}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin: 30,
    fontStyle:'italic',
    textAlign:'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25
  },
  btnArea:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22'
  }
});
export default App;



  

