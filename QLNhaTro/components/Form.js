import React, { Component } from 'react';
import { Text, StyleSheet, View,TouchableOpacity,TextInput } from 'react-native';
import {connect} from 'react-redux';
 class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            en:'',
            vn:''
        };
        
        this.onAdd = this.onAdd.bind(this);
    };
    onAdd(){    
        const {en,vn} = this.state;
        this.props.dispatch({
            type:'ADD_WORD',
           en,//en:en,
           vn  // vn:vn
           
        });
        this.props.dispatch({
            type:'TOGGLE_ISADDING'
        })
    }
  render() {
      const {textInput,container} = styles;
      const {en,vn} = this.state;
    return (
      <View style={container}>
        <TextInput 
        style={textInput}
        value={en}
        onChangeText ={en=>this.setState({en:en})}
        placeholder="Nhập Tiếng Anh"
        />
        <TextInput 
         style={textInput}
         value={vn}
         onChangeText ={vn=>this.setState({vn:vn})}
         placeholder="Nhập Tiếng Việt"
        />
        <TouchableOpacity onPress={this.onAdd}>
        <Text>Add</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
}
export default connect()(Form);
const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        height:50,
        width:300,
        margin:10,
        paddingHorizontal:10,
        backgroundColor:'#F4F6D4'
    }
})
