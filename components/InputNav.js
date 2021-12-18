import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InputNav() {
    return (
        <View style={styles.input_nav}>
            <Ionicons style={{ marginRight: 10 }} name="search-outline" size={26} color="#00CCBC" />
            <TextInput
                style={styles.input_nav_input}
                placeholder="Plats, restaurants ou Types de c..."
                placeholderTextColor="#838686"
            />
            <Ionicons style={{ marginLeft: 10 }} name="options-outline" size={26} color="#00CCBC" />
        </View>
    );
}

const styles = StyleSheet.create({
    input_nav: {
        position: 'absolute',
        backgroundColor: 'white',
        top: 110,
        zIndex: 3, // works on ios
        elevation: 3,  // works on android
        padding: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: "#000",
        shadowOpacity: 0.10,
        shadowRadius: 4.65,
    },
    input_nav_input: {
        width: '70%',
        fontSize: 16,
        color: 'black',
    }
})