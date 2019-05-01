import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,TouchableHighlight } from 'react-native'

// let randomHex = () => {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

export default class Week extends Component {
    constructor(props){
        super(props);
        this.state={
            // backgroundColor:randomHex()
          
            t2:false,
            t3:false,
            t4:false,
            t5:false,
            t6:false,
            t7:false,
            cn:false,
            red:false
        };
    }
    
  render() {
      const {rows,titleText,container,background,changeBackground,textColor,redColor} = styles;
      const {t2,t3,t4,t5,t6,t7,cn,red} = this.state;
    return (
        <View style={container}>
            <View style={rows}>          
                <View style={[textColor,t2 ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({t2:!t2,red:!red})}>                
                    <Text style={{color:'black',}}>T2</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={red?redColor:null}></Text>
                </View>
            </View>
            <View style={rows}>          
                <View style={[textColor,t3 ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({t3:!t3})}>                
                    <Text style={{color:'black',}}>T3</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    {/* <Text style={{width:10,height:10,borderRadius:50,backgroundColor:'red'}}></Text> */}
                </View>
            </View>
            <View style={rows}>          
                <View style={[textColor,t4 ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({t4:!t4})}>                
                    <Text style={{color:'black',}}>T4</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{width:10,height:10,borderRadius:50,backgroundColor:'red'}}></Text>
                </View>
            </View>
            <View style={rows}>          
                <View style={[textColor,t5 ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({t5:!t5})}>                
                    <Text style={{color:'black',}}>T5</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{width:10,height:10,borderRadius:50,backgroundColor:'red'}}></Text>
                </View>
            </View>
            <View style={rows}>          
                <View style={[textColor,t6 ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({t6:!t6})}>                
                    <Text style={{color:'black',}}>T6</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    {/* <Text style={{width:10,height:10,borderRadius:50,backgroundColor:'red'}}></Text> */}
                </View>
            </View>
            <View style={rows}>          
                <View style={[textColor,t7 ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({t7:!t7})}>                
                    <Text style={{color:'black',}}>T7</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    {/* <Text style={{width:10,height:10,borderRadius:50,backgroundColor:'red'}}></Text> */}
                </View>
            </View>
            <View style={rows}>          
                <View style={[textColor,cn ? changeBackground : null]}>
                <TouchableHighlight 
                    onPress={()=>this.setState({cn:!cn})}>                
                    <Text style={{color:'black',}}>CN</Text>
                </TouchableHighlight> 
                </View>

                <View style={{flex:1,justifyContent:'flex-end'}}>
                    {/* <Text style={{width:10,height:10,borderRadius:50,backgroundColor:'red'}}></Text> */}
                </View>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1.3,
        flexDirection:'row',
        // marginTop:15,
        borderColor:'#ece6e6',
        borderRadius:10,
        marginLeft:5,
        marginRight:5,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        borderWidth:1,
        backgroundColor:'white'
        
    },
    rows:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:11,
        
       
        
    },
    titleText:{
        color:'#211d1d',
        fontWeight:'bold'
    },
    changeBackground:{   
        backgroundColor: "skyblue",
        borderRadius: 50,
        width:30,
        height:30,
        justifyContent:'space-around',
        alignItems:'center'
        
    },
    textColor:{
        flex:1,justifyContent:'space-around'
    },
    redColor:{
        width:10,
        height:10,
        borderRadius:50,
        backgroundColor:'red'
    }
})
