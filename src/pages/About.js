import React, { useState, useEffect } from 'react'
import { View, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { SharedElement } from "react-navigation-shared-element";
import BtnScale from 'react-native-touchable-scale'
import * as Animatable from 'react-native-animatable';

// Icons Cactus 
import IconLeft from 'react-native-vector-icons/AntDesign';
import IconMenu from 'react-native-vector-icons/Feather';
import IconPlus from 'react-native-vector-icons/AntDesign';
import IconDown from 'react-native-vector-icons/AntDesign';
import IconTemperature from 'react-native-vector-icons/FontAwesome5';
import IconWater from 'react-native-vector-icons/Ionicons';
import IconSun from 'react-native-vector-icons/MaterialIcons';


export default function About({ route, navigation }) {
  const { data } = route.params

  const [ counter, setCounter ] = useState(1)
  const [ price, setPrice ] = useState(data.price)

  console.log(data)

  function handlerCounterPlus(){
    setCounter(counter + 1)
  }
  function handlerCounterDown(){
    if(counter > 1){
      setCounter(counter - 1)
    }
  }
  
  return (
    <SafeAreaView style={{flex: 0, backgroundColor: "#0B976A" }}>
      {/* Background */}
      <ImageBackground source={require('../../assets/backgroundMain.png')} style={styles.apresentation}>
        <View style={styles.header}>
          <BtnScale onPress={() => navigation.goBack()}>
            <IconLeft name="left" size={30} color="#fff" />
          </BtnScale>
          <IconMenu name="menu" size={30} color="#fff" />
        </View>
        <SharedElement id={`itemTitle`}>
          <Text style={styles.h1}>Está procurando algum Cacto</Text>
        </SharedElement>
        <SharedElement id={`itemInput`}>
          <TextInput placeholderTextColor="#fff" style={styles.input} placeholder="Capuz de Monge" />
        </SharedElement>
      </ImageBackground>

      {/* Main */}

      <SharedElement style={{elevation: 12, zIndex: 99}} id={`item.${data.id}.img`}>
        <Animatable.Image delay={100} duration={2000} direction="alternate" iterationCount="infinite" animation={"pulse"} style={styles.stretch} source={data.imgProfile} />
      </SharedElement>

      <ScrollView style={styles.boxCactus}>

        <SharedElement id={`item.${data.id}.name`}>
          <Text style={styles.cactuName}>{data.name}</Text>
        </SharedElement>

        <Animatable.Text delay="200" animation="fadeInUp" style={styles.description}>{data.description}</Animatable.Text>

        <Animatable.View delay="200" animation="fadeInUp" style={styles.boxPrice}> 
          <View style={styles.boxCouter}> 
            <BtnScale activeScale={.9}  tension={100} friction={100} style={[styles.btnAdd, ]} onPress={handlerCounterDown}>
              <IconDown name="minuscircleo" size={30} color="#0B976A"></IconDown>
            </BtnScale>

            <Text style={styles.counterNumber}>{counter}</Text> 

            <BtnScale activeScale={.9} tension={100} friction={100} style={styles.btnAdd} onPress={handlerCounterPlus}> 
              <IconPlus name="pluscircleo" size={30} color="#0B976A"></IconPlus>
            </BtnScale >
          </View>

          <Text style={styles.price}>R$ {price}</Text>

        </Animatable.View>

        <Animatable.Text delay="300" animation="fadeInUp" style={styles.galeria}>Galeria</Animatable.Text>

        <FlatList data={data.galery}
          horizontal
          style={styles.galery}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Animatable.Image delay={500} animation={"fadeInRight"} style={styles.galeriaImg} source={{uri: `${item}`}}/>
          )}
          />

          <Animatable.View style={styles.bads} animation="fadeInUp" delay={600}>
            <View style={styles.badsInfos}>
              <View style={styles.badIcons}>
                <IconSun name="wb-sunny" size={22} color="#0B976A"></IconSun>
              </View>
              <Text style={styles.badNumber}>{data.humidity}</Text>
              <Text style={styles.badSub}>Solaridade</Text>
            </View>
          
            <View style={styles.badsInfos}>
              <View style={styles.badIcons}>
                <IconWater name="ios-water" size={22} color="#0B976A"></IconWater>
              </View>
              <Text style={styles.badNumber}>{data.water}</Text>
              <Text style={styles.badSub}>Água</Text>
            </View>
        
            <View style={styles.badsInfos}>
              <View style={styles.badIcons}>
                <IconTemperature name="temperature-high" size={22} color="#0B976A"></IconTemperature>
              </View>
              <Text style={styles.badNumber}>{data.temperature}</Text>
              <Text style={styles.badSub}>Temperatura</Text>
            </View>

          </Animatable.View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  apresentation: {
    width: "100%",
    height: 250,
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    width: '100%',
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  h1: {
    left: -190,
    width: "50%",
    color: "#fff",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold"
  },
  input: {
    elevation: 0,
    opacity: 0,
    top: 100,
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
  boxCactus: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: '#fff',
    marginTop: -50,
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  stretch: {
    position: "absolute",
    right: 0,
    top: -100,
    width: 200,
    height: 200,    
    resizeMode: 'contain',    
  },
  cactuName:{
    position: "absolute",
    color: "#0B976A",
    fontWeight: "bold",
    fontSize: 28,
    width: "50%"
  },
  description:{
    marginTop: 150,
    fontWeight: "200",
    fontSize: 16
  },
  boxPrice:{
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    width: "100%",
  },
  boxCouter:{
    alignItems: "center",
    flexDirection: 'row',
  },
  counterNumber:{
    color: "#0B976A",
    fontWeight: "bold",
    fontSize: 22,
    marginHorizontal: 5
  },
  price:{
    color: "#0B976A",
    fontWeight: "bold",
    fontSize: 22
  },
  btnAdd:{
    padding: 10,
    backgroundColor: "#fff"
  },
  galeria:{
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 22,
    color: "#0B976A"
  },
  galery:{
    marginTop: 20,
    maxHeight: 120
  },
  galeriaImg:{
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 7,
    
  },
// Bads
  bads:{
    marginTop: 20,
    flexDirection: "row"
  },
  badsInfos:{
    flexDirection: 'column',
    marginRight: 50,
    width: 60
  },
  badIcons:{
    backgroundColor: "#C2EEE0",
    width: 40,
    height: 40, 
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  badNumber:{
    marginTop: 5,
    color: "#0B976A",
    fontSize: 14,
    fontWeight: "bold"
  },
  badSub:{
    color: "#0B976A",
    fontSize: 10,
    fontWeight: "200"
  },
})
