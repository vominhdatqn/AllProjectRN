import React, { Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';


class Word extends Component {
  memorizedWord(){
    this.props.dispatch({
      type:'TOGGLE_MEMORIZED',
      id:this.props.myWord.id
    });
  };
  ToggleShowWord(){
    this.props.dispatch({
      type:'TOGGLE_SHOWWORD',
      id:this.props.myWord.id
    });
  }
  
  render() {
      const {en,vn,memorized,isShow} =this.props.myWord;
      const textDecorationLine = memorized ? 'line-through' : 'none';
      const memorizedButtonText = memorized ? 'forget' : 'memorized';
      const meaning = isShow ? vn : "-------";
    return (
      <View style={styles.container}>
           <Text style={{textDecorationLine}}>{en}</Text>
           <Text >{meaning}</Text>
           <View style={styles.controller}>
              <TouchableOpacity style={styles.button} onPress={this.memorizedWord.bind(this)}>
                  <Text>{memorizedButtonText}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.ToggleShowWord.bind(this)}> 
              <Text>show</Text>
              </TouchableOpacity>
           </View>
      </View>
    )
  }
}
const styles= StyleSheet.create({
    container:{
      
        backgroundColor:'gray',
        padding:10,
        margin:10
    },
    controller:{
      flexDirection:'row',
      justifyContent:'space-around'
    },
    button:{
      backgroundColor:'skyblue',
      padding:10
    }
})
export default connect()(Word);