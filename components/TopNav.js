import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

export default function TopNav({ navigation }) {
    const route = useRoute();
    console.log(route.name);
    return (
        <View style={styles.topNav}>
            <View style={styles.topNav_top}>
                <View>
                    <Text style={styles.topNav_text}>Maintenant</Text>
                    <View style={styles.topNav_location}>
                        <View style={{ marginRight: 5 }}>
                            <Ionicons name="navigate" size={12} color="white" />
                        </View>
                        <Text style={styles.topNav_text_bold}>Rue Yves Toudic</Text>
                        <View style={{ marginLeft: 5 }}>
                            <Ionicons name="chevron-down-outline" size={20} color="white" />
                        </View>
                    </View>
                </View>
                <View style={styles.topNav_user}>
                    <Ionicons name="person-outline" size={20} color="#00CCBC" />
                </View>
            </View>
            <View style={styles.topNav_bot}>
                <TouchableOpacity
                    style={route.name === 'Home' ? styles.bopNav_text_view : styles.bopNav_text_no}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.bopNav_text}>Livraison</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={route.name === 'Emporter' ? styles.bopNav_text_view : styles.bopNav_text_no}
                    onPress={() => navigation.navigate('Emporter')}>
                    <Text style={styles.bopNav_text}>A emporter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topNav: {
        backgroundColor: '#00CCBC',
        flex: 1,
        width: '100%',
        height: 0.2,
        flexDirection: "column",
        paddingLeft: 15,
        paddingTop: 6,
        paddingRight: 15,
    },
    topNav_top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    topNav_text: {
        fontSize: 15,
        color: 'white'
    },
    topNav_text_bold: {
        fontSize: 16,
        marginTop: 2,
        color: 'white',
        fontWeight: 'bold',
    },
    topNav_user: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.19,
        shadowRadius: 4.65,
        elevation: 7,
    },
    topNav_bot: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: 'center',
    },
    bopNav_text_no: {
        marginRight: 28
    },
    bopNav_text_view: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 20,
        backgroundColor: '#00857b',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    bopNav_text: {
        fontSize: 15,
        color: 'white',
    },
    topNav_location: {
        flexDirection: "row",
        alignItems: 'center'
    }
})