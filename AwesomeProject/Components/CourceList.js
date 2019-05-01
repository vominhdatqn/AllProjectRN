import React, { Component } from 'react'
import { Text, StyleSheet, View,FlatList } from 'react-native'

export default class CourceList extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        {key:1,tiet:4,mon:'Mạng máy tính',lop:'15DTH13-14',firsttime:'09:15',lasttime:'11:25',phong:'B.11.01'},
        {key:2,tiet:7,mon:'Lập trình C',lop:'15DTH01',firsttime:'12:30',lasttime:'14:45',phong:'B.11.02'},
        {key:3,tiet:13,mon:'Lập trình Web',lop:'15DTH12',firsttime:'18:00',lasttime:'20:30',phong:'B.12.04'},
        {key:4,tiet:1,mon:'Lập trình Java',lop:'15DTH03',firsttime:'06:45',lasttime:'10:30',phong:'E.07.01'},
      ]
    }
  }
  renderHeader = () => {
    //View to set in Header
    return (
      <View >
        <Text style={styles.textStyle}> This is Header </Text>
      </View>
    );
  };
  render() {
      const {container} = styles;
      const {data} = this.state;
    return (
      <View style={container}>
      <FlatList 
        data={data}
        ListHeaderComponent={this.renderHeader}
        keyExtractor = { (item, index) => index.toString() }
        renderItem={({item})=>
        <View style={{flex:1,flexDirection:'row',marginBottom:10}}>
            <View style={{flex:2,borderRadius:10,borderColor:'#ece6e6',borderWidth:1,marginRight:5,shadowColor: 'black',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.5,
       shadowRadius: 2,
       elevation: 6,
       backgroundColor:'white'}}>
                  <View style={{alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'black'}}>Tiết {item.tiet}</Text>
                  <View style={{flex:1,flexDirection:'row'}}>
                       <Text style={{width:12,height:12,borderRadius:100,textAlign:'center',backgroundColor:'gray',marginRight:7}}></Text>
                        <Text style={{fontSize:16,color:'black'}}>{item.firsttime}</Text>
                    </View>
                 
                  
                  <View style={{flex:1,flexDirection:'row'}}>
                       <Text style={{width:12,height:12,borderRadius:100,textAlign:'center',backgroundColor:'green',marginRight:7}}></Text>
                        <Text style={{fontSize:16,color:'black'}}>{item.lasttime}</Text>
                    </View>
                  
                  </View>
            </View>
            <View style={{flex:5,shadowColor: 'black',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.5,  
       shadowRadius: 2,
       elevation: 6,
       backgroundColor:'white',borderRadius:10,}}>
                  <View style={{marginLeft:8}}> 
                  <Text style={{fontSize:20,color:'black'}}>{item.mon}</Text>
                  <Text style={{fontSize:18,color:'orange'}}>{item.phong}</Text>
                  <Text style={{fontSize:18,color:'black'}}>{item.lop}</Text>
                  </View>
            </View>

        </View>
        }
      
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:8,
       marginLeft:5,
       marginRight:5,
       
    }
})
