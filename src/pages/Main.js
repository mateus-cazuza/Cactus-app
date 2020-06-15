import React from 'react'
import { View,Image, TouchableOpacity,TextInput, ImageBackground, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native'
import {data} from '../../src/data/index'
import { SharedElement } from "react-navigation-shared-element";
import BtnScale from 'react-native-touchable-scale'
import * as Animatable from 'react-native-animatable';
// Icons Cactus 
import IconCactu from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMenu from 'react-native-vector-icons/Feather';
import { DarkTheme } from '@react-navigation/native';

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={{flex: 0, backgroundColor: "#0B976A" }}>
      <ImageBackground source={require('../../assets/backgroundMain.png')} style={styles.apresentation}>
        <View style={styles.header}>
          <IconCactu name="cactus" size={30} color="#fff" />
          <IconMenu name="menu" size={30} color="#fff" />
        </View>
        <SharedElement id={`itemTitle`}>
          <Text style={styles.h1}>Está procurando algum Cacto</Text>
        </SharedElement>
        <SharedElement id={`itemInput`}>
          <TextInput placeholderTextColor="#fff" style={styles.input} placeholder="Capuz de Monge" />
        </SharedElement>
      </ImageBackground>

      <Animatable.View style={styles.containerCactus}>
        <View style={styles.viewBtn}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={{color: "#fff"}}>Top</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={{color: "#fff"}}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={{color: "#fff"}}>Novos</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={data}
          horizontal
          style={styles.flatList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <BtnScale activeScale={0.9} 
              onPress={() => navigation.navigate('About', {data: item})}>
              <SharedElement id={`item.${item.id}.containerCactus`} style={styles.boxCactus}>
                
                <SharedElement id={`item.${item.id}.img`}>
                  <Animatable.Image animation="pulse" style={styles.stretch} source={item.imgProfile}/>
                </SharedElement>

                <View style={styles.shadow}></View>

                <SharedElement id={`item.${item.id}.name`}>
                  <Text style={styles.name}>{item.name}</Text> 
                </SharedElement>

                <Text style={styles.name}>R$ {item.price}</Text> 

              </SharedElement>
              
            </BtnScale>
        )}/>


      </Animatable.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  apresentation:{
    width: "100%",
    height:250,
    flexDirection: 'column'
  },
  header:{
    width: '100%',
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  h1:{
    width: "50%",
    color: "#fff",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold"
  },
  input:{
    padding: 10,
    paddingVertical: 15,
    width: "90%",
    marginLeft: "5%",
    marginTop: 20,
    borderRadius: 4,
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.2)"
  },
  containerCactus:{
    backgroundColor: "#fff",
    marginTop: -30,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  viewBtn:{
    flexDirection: 'row',
    marginVertical: 20
  },
  btn:{
    marginHorizontal: 10,
    backgroundColor: "#0B976A",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    color: "#fff"
  },
  boxCactus:{
    width: 180,
    height: 250,
    backgroundColor: "#0B976A",
    marginHorizontal: 10,
    borderRadius: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 60,
    alignItems: "center"
  },
  flatList:{
    paddingBottom: 30
  },
  stretch: {
    marginTop: -50,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    transform: [
      {rotateZ: '0deg'}
    ]
  },
  shadow:{
    marginTop: 20,
    width: 80,
    height: 10,
    backgroundColor: "#000",
    borderRadius: 50,
    opacity: 0.1,
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3.84,

  },
  name:{
    marginTop: 20,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  }
});