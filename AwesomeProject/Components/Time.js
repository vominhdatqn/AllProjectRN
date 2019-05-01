import React, { Component } from 'react'
import { Text, StyleSheet, View,Picker } from 'react-native'

export default class Time extends Component {
    constructor(props){
        super(props);
        this.state={
            months:'',
            week:''
        }
    }
  render() {
      const {viewPiker,container,picker} = styles;
    return (
      <View style={container}>
        <View style={viewPiker}>
            <Picker
                // mode="dropdown"
                selectedValue={this.state.language}
                style={picker}
               
               
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item color='#211d1d' label="Tháng 01" value="01" />
                <Picker.Item color='#211d1d' label="Tháng 02" value="02" />
                <Picker.Item color='#211d1d' label="Tháng 03" value="03" />
                <Picker.Item color='#211d1d' label="Tháng 04" value="04" />
                <Picker.Item color='#211d1d' label="Tháng 05" value="05" />
                <Picker.Item color='#211d1d' label="Tháng 06" value="06" />
                <Picker.Item color='#211d1d' label="Tháng 07" value="07" />
                <Picker.Item color='#211d1d' label="Tháng 08" value="08" />
                <Picker.Item color='#211d1d' label="Tháng 09" value="09" />
                <Picker.Item color='#211d1d' label="Tháng 10" value="10" />
                <Picker.Item color='#211d1d' label="Tháng 11" value="11" />
                <Picker.Item color='#211d1d' label="Tháng 12" value="12" />
                </Picker>
        </View>
        <View style={viewPiker}>
            <Picker
                selectedValue={this.state.week}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({week: itemValue})
                }>
                <Picker.Item color='#211d1d' label="Tuần 1" value="1" />
                <Picker.Item color='#211d1d' label="Tuần 2" value="2" />
                <Picker.Item color='#211d1d' label="Tuần 3" value="3" />
                <Picker.Item color='#211d1d' label="Tuần 4" value="4" />
                <Picker.Item color='#211d1d' label="Tuần 5" value="5" />
                <Picker.Item color='#211d1d' label="Tuần 6" value="6" />
                <Picker.Item color='#211d1d' label="Tuần 7" value="7" />
                </Picker>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'row',
        // marginTop:24
        
    },
    viewPiker:{
        flex:1,
        borderRadius: 10,
        alignItems:'flex-end',
        marginLeft:5,
        marginRight:5,
        justifyContent:'center',
        marginBottom:10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor:'white',
        borderColor:'#ece6e6',
        borderWidth:1
        
    },
    picker: {
        width: 140,
        fontSize: 20,
        borderRadius: 10,
        fontWeight:'bold',
       
    },

})
