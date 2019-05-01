import React, { Component } from 'react'
import { Text, StyleSheet, View,Dimensions,FlatList,ImageBackground } from 'react-native'
const {width,height} = Dimensions.get('window');
export default class HomeRoom extends Component {
  constructor(props){
    super(props);
    this.state={
      dataRoom:[
        {key:1,gia:'5,8',ten:'Lý thường kiệt,Quận 10',diachi:'284/7 Lý thường kiệt,P12,Quận 10',loai:'Phòng cho thuê'},
        {key:2,gia:'3,5',ten:'Phòng lớn có gác và mặt bằng,tiện ở và để xe',diachi:'284/7 Lý thường kiệt,P12,Quận 10',loai:'Kí túc xá'},
        {key:3,gia:'3,2',ten:'Tiếng Anh nội trú - Tiếng Anh cho người mới băt đầu',diachi:'215/36e Nguyễn Xí,P11,Quận Bình Thạnh',loai:'Kí túc xá'},
        {key:4,gia:'4,5',ten:'Hoàng Sa, Quận Tân Bình',diachi:'1167 Hoàng Sa,P25,Quận Tân Bình',loai:'Phòng cho thuê'},
        {key:5,gia:'4,8',ten:'Tây thạnh, Quận Tân Phú',diachi:'98/4 Tây Thạnh,P2,Quận Tân Phú',loai:'Phòng cho thuê'},
        {key:6,gia:'5,8',ten:'Trần kế xương, Quận Phú Gia',diachi:'103/10B Trần Kế Xương,P5,Quận Phú Nhuận',loai:'Phòng cho thuê'},
      ]
    }
  }
  render() {
      const {container,GridViewContainer,viewBackgroundImage,GridViewTextLayout,containerViewBackGround,containerTitle} = styles;
      const {dataRoom} = this.state;
    return (
      <View style={container}>      
      <FlatList 
        data={dataRoom}              
        renderItem={({item})=>
          <View style={GridViewContainer}>   
                      <View style={containerViewBackGround}>
                        <ImageBackground  source={require('../../images/q2.jpg')} 
                        style={viewBackgroundImage} resizeMode='cover'
                        borderRadius={6}>
                            <Text style={GridViewTextLayout}>{item.key}</Text>
                        </ImageBackground>
                </View>                    
              <View style={containerTitle}>
                <View style={{flex:2,justifyContent:'flex-end'}}>
                  <Text numberOfLines={2} style={{fontSize:13,fontWeight:'bold',color:'black'}}>{item.loai} {item.ten}</Text>
                </View>
                <View style={{flex:1}}>
                <Text style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"#e91e63"}}>{item.gia} triệu/phòng</Text>
                </View>
                <View style={{flex:2}}>
                <Text  numberOfLines={1} style={{fontSize:12,fontWeight:'700',fontFamily:'Cochin',color:"gray"}}>{item.diachi}</Text>
                </View>
              
              </View>                             
          </View>
      }
      numColumns={2}
      keyExtractor={(item, index) => item.key}
      />          
  </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        width:width*0.94,
        height:height*1.1,
        marginLeft:12,
        backgroundColor:'white',      
    },
    GridViewContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',     
      height: 220,
      margin: 5,  
      backgroundColor: 'white',
     
   },
   GridViewTextLayout: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
    
  },
  viewBackgroundImage:{
    width:"100%",
    height:"100%",
    borderWidth:1,
    borderColor:'#FEFFFE',
    borderRadius:12
  },
  containerViewBackGround:{
    height:120,
    width:"100%",
    backgroundColor: 'white',
    borderRadius:12,
    shadowColor: '#ece6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    borderWidth:1,
    borderColor:'#FEFFFE',
  },
  containerTitle:{
    height:100,
    width:"100%",
    backgroundColor: 'white',
  }
})
