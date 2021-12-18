import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function CatScrollView() {
    return (
        <ScrollView
            style={styles.cat_scrollview}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ paddingRight: 17, flexDirection: 'row' }}>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/offers.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Offres</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/grocery.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Courses</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/burgers-1.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Burgers</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/pizza.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Pizzas</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/sushi-1.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Sushi</Text>
                </View>
                <View style={styles.content_view_offers}>
                    <Image
                        style={styles.content_view_offers_img}
                        source={require("../assets/poke.png")}
                    />
                    <Text style={styles.content_view_offers_txt}>Poke</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cat_scrollview: {
        paddingLeft: 20,
        paddingBottom: 20,
    },
    content_view_offers: {
        position: 'relative',
        marginRight: 15,
    },
    content_view_offers_img: {
        width: 90,
        height: 90,
        borderRadius: 5,
    },
    content_view_offers_txt: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontWeight: '900',
        color: 'white'
    }
})