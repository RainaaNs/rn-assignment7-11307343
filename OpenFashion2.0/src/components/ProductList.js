import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
// import { useCart } from "../context/CartProvider";
import { useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../api/productApi';

// const products = [
//    {id:1, 
//         image: require('../assets/dress1.png'), 
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: 'Office Wear',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//     },
//     {
//         id: 2,
//         image: require('../assets/dress2.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: 'Black',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//       },
//       {
//         id: 3,
//         image: require('../assets/dress3.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: 'Church Wear',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//       },
//       {
//         id: 4,
//         image: require('../assets/dress4.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: 'Lamerei',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//       },
//       {
//         id: 5,
//         image: require('../assets/dress5.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: '21WN',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//       },
//       {
//         id: 6,
//         image: require('../assets/dress6.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: 'Lopo',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//       },
//       {
//         id: 7,
//         image: require('../assets/dress7.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: '21WN',
//         title2: 'reversible angora cardigan',
//         title3: '$120'
//       },
      
//       {
//         id: 8,
//         image: require('../assets/dress4.png'),
//         overlayImage: require('../assets/add_circle.png'),
//         removeImage: require('../assets/remove.png'),
//         title1: 'Lame',
//         title2: 'aratogas summer dress',
//         title3: '$120'
//       },
// ];

const ProductList = () => {
    // const { addToCart } = useCart();
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>{error}</Text>;
    }


    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item.id })}>
        
        <View>
            <View>
                <TouchableOpacity style={styles.addcircleImage} onPress={() => addToCart(item)}>
                    <Image source={require('../assets/add_circle.png')}/>
                </TouchableOpacity>
                <Image style={styles.productImage} source={{uri: item.image}} 
                    resizeMode="contain"
                    onError={(e) => {console.log('Image load error for ' + item.title + ':', e.nativeEvent.error);
                    }}
                    defaultSource={require('../assets/dress2.png')}/>
            </View>
            <View style={styles.titlesPositioning}>
               <View style={styles.titles}>
                    <View style={{width:155}}>
                        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.title1}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.title2}>{item.category}</Text>
                    </View>
                    <View>
                        <Text style={styles.title3}>${item.price}</Text>
                    </View>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data = {products}
            renderItem = {renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productListContainer}
        />

    )
}

const styles = StyleSheet.create({
    productListContainer:{
        marginHorizontal:20,
        marginLeft:15,
        paddingBottom:80,
        maxHeight:'auto'
    },
    title1:{
        fontSize:14,
        marginTop:9,
        fontFamily:'tenorsans',
    },
    title2:{
        fontSize:12,
        marginTop:3,
        color:'#555555',
        fontFamily:'tenorsans'
    },
    title3:{
        fontSize:16,
        marginTop:9,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    titles:{
        flexDirection:'column',
    },
    titlesPositioning:{
        marginLeft:9, 
        marginBottom:22
    },
    productImage:{
        marginHorizontal:7,
        width:160,
        height:211
    },
    addcircleImage:{
        position: 'absolute',
        zIndex:1,
        top: 180,
        left: 142,
    }

})

export default ProductList;