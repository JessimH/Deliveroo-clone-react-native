import React from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RestauCard from './RestauCard'

export default function RestoScrollView(props) {
    return (
        <View style={styles.restau_scrollView}>
            <View style={styles.restau_scrollView_title_container}>
                <Text style={styles.restau_scrollView_title}>{props.title}</Text>
                <Ionicons name="arrow-forward-outline" size={23} color="#00CCBC" />
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ paddingLeft: 17, paddingRight: 2, flexDirection: 'row' }}>
                    <RestauCard />
                    <RestauCard />
                    <RestauCard />
                    <RestauCard />
                    <RestauCard />
                    <RestauCard />
                    <RestauCard />
                    <RestauCard />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    restau_scrollView: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 25,
        marginBottom: 5,
    },
    restau_scrollView_title_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingRight: 10,
        width: '100%',
        paddingLeft: 17,
    },
    restau_scrollView_title: {
        fontWeight: '700',
        fontSize: 17,
    },
})