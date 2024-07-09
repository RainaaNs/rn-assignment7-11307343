import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';


const ProductDetail = () => {
  return (
    
    <View style={{backgroundColor:'white', flex:1}}>
        <ScrollView style={styles.scrollView}>
            <Image style={styles.productImage} source={require('../assets/dress4.png')}/>
            <View style={styles.productMainDetails}>
                <View style={styles.productTitleLine}>
                    <Text style={styles.productTitle}>L A M E R E I</Text>
                    <Image style={styles.exportImage} source={require('../assets/Export.png')}/>
                </View>
                
                <View style={{marginTop:5}}>
                    <Text style={styles.productMainDetailsLine2}>Recycle Boucle Knit Cardigan Pink</Text>
                </View>

                <View style={{marginTop:3}}>
                    <Text style={styles.estMoney}>$120</Text>
                </View>
            </View>

            <View style={styles.productsDetails}>
                <View>
                    <Text>M A T E R I A L S</Text>
                </View>
                <View>
                    <Text style={styles.MaterialsText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
                </View>

                <View style={styles.materialsItems}>
                    <Image source={require('../assets/DoNotBleach.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Do not use bleach</Text>    
                </View>
                <View style={styles.materialsItems}>
                    <Image source={require('../assets/DoNotTumbleDry.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Do not tumble dry</Text>   
                </View>
                <View style={styles.materialsItems}>
                    <Image source={require('../assets/DoNotWash.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Dry clean with tetrachloroethylene</Text>
                </View>
                <View style={styles.materialsItems}>
                    <Image source={require('../assets/IronLowTemperature.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Iron at a maximum of 110ºC/230ºF</Text>  
                </View>
            
                <View style={styles.separator}></View>

                <View style={styles.shippingContainer}>
                    <View style={styles.flexDirectionrow}>
                        <Image source={require('../assets/Shipping.png')}/>
                        <Text style={styles.shippingTitle}>Free Flat Rate Shipping</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/Up.png')}/>
                    </View>
                </View>

                <View style={styles.shippingDetailsContainer}>
                    <Text style={styles.shippingDetails}>Estimated to be delivered on</Text>
                    <Text style={styles.shippingDetails}>09/11/2021 - 12/11/2021.</Text>
                </View>
            </View>
        </ScrollView>
        <View style={styles.footer}>
            <View style={styles.footerContent}>
                <View style={styles.flexDirectionrow}>
                    <Image style={{tintColor:'white'}} source={require('../assets/Plus.png')}/>
                    <Text style={styles.basketText}>ADD TO BASKET</Text>
                </View>
                <View>
                    <Image style={{tintColor:'white'}} source={require('../assets/Heart.png')}/>
                </View>
            </View>

        </View>
    </View>
  )
}

export default ProductDetail;

const styles = StyleSheet.create ({
    scrollView:{
        flex:1
    },
    productImage:{
        width:335,
        height:410,
        alignSelf:"center"
    },
    productTitleLine:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    productTitle:{
        fontSize:18
    },
    exportImage:{
        width:20,
        height:20
    },
    productMainDetails:{
        flexDirection:'column',
        marginHorizontal:34,
        marginTop:20
    },
    estMoney:{
        fontSize:20,
        color:'#DD8560',
        // fontFamily:'tenorsans'
    },
    productMainDetailsLine2:{
        color:'#555555',
    },
    materialsItems:{
        flexDirection:'row',
        marginBottom:18,
        opacity:0.6
    },
    materialsItemsPositioning:{
        marginLeft:9
    },
    productsDetails:{
        flexDirection:'column',
        marginHorizontal:34,
        marginTop:18,
    },
    MaterialsText:{
        fontSize:15,
        marginBottom:20,
        marginTop:6,
        lineHeight:23,
        opacity:0.6
    },
    separator:{
        width:270,
        height:1,
        backgroundColor:'#555555',
        marginTop:5,
        opacity:0.4
    },
    footer:{
        backgroundColor:'black',
        width:'100%',
        height: 80
    },
    footerContent:{
        marginHorizontal:22,
        marginVertical: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    basketText:{
        color:'white',
        marginLeft:10
    },
    shippingContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginTop:23, 
        marginLeft:1
    },
    shippingTitle:{
        marginLeft:10
    },
        shippingDetails:{
        marginTop:7
    },
    shippingDetailsContainer:{
        marginLeft:34, 
        opacity:0.6
    },
    flexDirectionrow:{
        flexDirection:'row'
    }
    


})