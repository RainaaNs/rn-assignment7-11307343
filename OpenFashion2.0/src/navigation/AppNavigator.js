import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import BlogScreen from '../screens/BlogScreen';
import ClothingScreen from '../screens/ClothingScreen';
import ElectronicScreen from '../screens/ElectronicScreen';
import JeweleryScreen from '../screens/JeweleryScreen';
import LocationsScreen from '../screens/LocationsScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeader = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image style={{marginLeft:19, width:30, height:30}} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View style={{marginLeft:93}}>
        <Image style={{width:95, height:35}} source={require('../assets/Logo.png')}/>
      </View>

      <View style={{flexDirection:'row', marginLeft:38}}>
        <Image style={{marginHorizontal:10, width:33, height:33, marginTop:-1}} source ={require('../assets/Search.png')}/>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image style={{ width:30, height:30}} source ={require('../assets/shoppingBag.png')}/>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};
const CustomHeaderCart = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:143}}>
        <Image style={{width:95, height:35}} source={require('../assets/Logo.png')}/>
      </TouchableOpacity>

      <View style={{flexDirection:'row', marginLeft:78}}>
        <Image style={{width:33, height:33, marginTop:-1}} source ={require('../assets/Search.png')}/>
      </View>
      
    </View>
  );
};
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={{marginVertical:23}}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Image source={require('../assets/Close.png')} style={{height:25, width:25, marginLeft:13, marginTop:-18}}  />
      </TouchableOpacity>
      <Text style={{fontFamily:'tenorsans', marginTop:23, marginLeft:18, fontSize:16, marginBottom:11}}>E R I C  A T S U</Text>
      <View style={{backgroundColor:'#DD8560', width:120, height:1, marginLeft:23, marginBottom:-10}}></View>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
        }
      }}>
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <CustomHeaderCart />,
          }}
        />
    </Stack.Navigator>
  );
};


const AppNavigator = () => {
    const navigation = useNavigation(); 

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainDrawer" component={MainDrawerNavigator} />
          <Stack.Screen name="Cart" component={CartNavigator} />
        </Stack.Navigator>
  );
};

const MainDrawerNavigator =() =>{
  return (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#ffffff',
            width: 226,
          },
          drawerLabelStyle: {
            fontFamily: 'tenorsans',
            fontSize: 17, 
            marginLeft: 1, 
            color:'black'
          },
        }}>
            <Drawer.Screen name="Store" 
                           component={HomeScreen}
                           options={{ headerLeft: () => <CustomHeader/>,
                                      headerTitle:''}}
            />
            <Drawer.Screen name="Locations" 
                           component={LocationsScreen}          
            />
            <Drawer.Screen name="Blog" 
                           component={BlogScreen}          
            />
            <Drawer.Screen name="Jewelery" 
                           component={JeweleryScreen}          
            />
            <Drawer.Screen name="Electronic" 
                           component={ElectronicScreen}          
            />
            <Drawer.Screen name="Clothing" 
                           component={ClothingScreen}          
            />  
        </Drawer.Navigator>
  );
};

export default AppNavigator;








