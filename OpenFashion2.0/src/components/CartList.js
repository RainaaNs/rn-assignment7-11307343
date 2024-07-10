import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from "react-native";
// import { useCart } from "../context/CartProvider";

// const cartproducts = [
//     {
//         id:99,
//         image: require('../assets/dress1.png'), 
//         removeImage: require('../assets/remove.png'),
//         title1: 'OFFICE WEAR',
//         title2: 'Office wear for your office',
//         title3: '$120'
//     },
//     {
//         id:100,
//         image: require('../assets/dress4.png'), 
//         removeImage: require('../assets/remove.png'),
//         title1: 'LAMEREI',
//         title2: 'Recycle Boucle Knit Cardigan Pink',
//         title3: '$120'
//     },
//     {
//         id:101,
//         image: require('../assets/dress3.png'), 
//         removeImage: require('../assets/remove.png'),
//         title1: 'CHURCH WEAR',
//         title2: 'Recycle Boucle Knit Cardigan Pink',
//         title3: '$120'
//     }
// ]



const CartList = () => {
    // const { cartItems, removeFromCart } = useCart();

    const renderItem = ({item}) => (
        <View style={{flexDirection:'row'}}>
            <View>
                <Image style={styles.cartImage} source={item.image}/>
            </View>
            <TouchableOpacity style={styles.removeImage} onPress={() => removeFromCart(item.id)}>
                <Image source={require('../assets/remove.png')}/>
            </TouchableOpacity>
            <View>
            <Text style={styles.textPosition}>
               <View>
                    <View>
                        <Text style={styles.title1}>{item.title1}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title2}>{item.title2}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.title3}>{item.title3}
                        </Text>
                    </View>
                </View>
            </Text>
            </View>
        </View>
    )

    // const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.title3.replace('$', '')), 0);


    return(
        <FlatList
            // data = {cartItems}
            renderItem = {renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={() => <CheckoutFooter total={totalPrice} />}
            numColumns={1}
            contentContainerStyle={styles.cartListContainer}
    />
  );
}

const CheckoutFooter = ({total}) => {
    // const { clearCartItems } = useCart();
  
    return(
    <View style={styles.footerContainer}>
        <View style={styles.estline}>
            <View><Text style={styles.este}>EST. TOTAL</Text></View>
            <View><Text style={styles.estMoney}>${total.toFixed(2)}</Text></View>
        </View>

        <View style={styles.blackfooter}></View>
        <View style={{ top:-40}}>
            <TouchableOpacity style={styles.checkoutview} onPress={() => { console.log('Checkout pressed'); clearCartItems();}}>
                <View style={{marginHorizontal:10}}>
                    <Image style={styles.shoppingImage} source={require('../assets/shoppingBag.png')}/>
                </View>
                <View>
                    <Text style={styles.footcheckoutext}>CHECKOUT</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    );
    
};

const styles = StyleSheet.create({
    cartListContainer:{
    marginTop:25,
    paddingBottom:50
  },
  removeImage:{
    position: 'absolute',
    zIndex:1,
    top: 100,
    left: 305,
  },
  cartImage:{
    width:100,
    height:130, 
    marginBottom:25,
    marginLeft:28,
  },
  textPosition:{
    marginLeft:13, 
    marginBottom:22,
    marginTop:25
  },
  title1:{
        fontSize:14,
        marginTop:3,
        fontFamily:'tenorsans'
    },
    title2:{
        fontSize:12,
        marginTop:3,
        color:'#555555',
        fontFamily:'tenorsans'
    },
    title3:{
        fontSize:16,
        marginTop:3,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    estline:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginHorizontal:37, 
        marginLeft:25,
        marginBottom: 17
    },
    este:{
        marginTop:6,
        fontSize:14,
        fontFamily:'tenorsans'
    },
    estMoney:{
        fontSize:20,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    blackfooter:{
        backgroundColor:'black', 
        height:60
    },
    checkoutview:{
        flexDirection:'row', 
        justifyContent:'center'
    },
    footcheckoutext:{
        color:'white', 
        fontSize:16, 
        fontFamily:'tenorsans' 
    },
    shoppingImage:{
        tintColor:'white', 
        width:26, 
        height:26, 
        top:-3 
    },
    footerContainer:{
        marginTop:440,
        marginBottom:-10

    }
    
  

})

export default CartList;



