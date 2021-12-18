import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RestauCard() {
    return (
        <View style={styles.restau_view}>
            <Text style={styles.restau_view_promotion}>0,99 € la livraison</Text>
            <View style={styles.restau_view_top}>
                <Image
                    style={styles.restau_view_img}
                    source={require("../assets/header-image.jpeg")}
                />
                <View style={styles.restau_view_time}>
                    <Text style={styles.restau_view_time_txt}>20 - 35</Text>
                    <Text style={styles.restau_view_time_txt_min}>min</Text>
                </View>
            </View>
            <View style={styles.restau_view_bot}>
                <Text style={styles.restau_view_name}>🍕 Pizza Hut - République</Text>
                <Text style={styles.restau_view_type}>Italien - Pizzas</Text>
                <View style={styles.restau_view_note}>
                    <Ionicons name="star" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                    <Text style={styles.restau_view_note_nbr}>4.6 Excellent</Text>
                    <Text style={styles.restau_view_note_txt}>(500+)</Text>
                </View>
                <View style={styles.restau_view_note}>
                    <Ionicons name="happy-outline" size={15} style={{ marginRight: 5 }} color="#76BF29" />
                    <Text style={styles.restau_view_note_nbr}>274 personnes ont aimé "Pizzas"</Text>
                </View>
                <Text style={styles.restau_view_distance}>à 5.7 km - livraison gratuite</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    restau_view: {
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        marginRight: 15
    },
    restau_view_promotion: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 6,
        elevation: 6,
        backgroundColor: "#F74F56",
        color: 'white',
        fontWeight: '700',
        padding: 5
    },
    restau_view_top: {
        position: 'relative',
        marginBottom: 20
    },
    restau_view_img: {
        height: 165,
        width: 280,
        borderRadius: 6
    },
    restau_view_time: {
        position: 'absolute',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        right: 20,
        bottom: -15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 50,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        zIndex: 30, // works on ios
        elevation: 30,  // works on android
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
    },
    restau_view_time_txt: {
        fontWeight: "800"
    },
    restau_view_time_txt_min: {
        fontWeight: "300",
        fontSize: 12,
        color: "#828585"
    },
    restau_view_bot: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    restau_view_name: {
        fontWeight: "800",
        fontSize: 17
    },
    restau_view_type: {
        fontWeight: "300",
        color: "#828585",
        marginTop: 2
    },
    restau_view_note: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },
    restau_view_note_nbr: {
        color: "#76BF29",
        marginRight: 5
    },
    restau_view_note_txt: {
        color: "#828585"
    },
    restau_view_distance: {
        color: "#828585",
        marginLeft: 2,
        marginTop: 2
    }
})