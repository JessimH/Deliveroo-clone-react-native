import React from 'react';
import { StyleSheet, ScrollView, Image, View } from 'react-native';

export default function CatScrollView() {
    return (
        <ScrollView
            style={styles.pub_view}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ paddingRight: 17, flexDirection: 'row' }}>
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub1.jpeg")}
                />
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub2.jpeg")}
                />
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub3.jpeg")}
                />
                <Image
                    style={styles.pub_img}
                    source={require("../assets/pub4.jpeg")}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pub_view: {
        paddingLeft: 17,
        paddingBottom: 8,
    },
    pub_img: {
        height: 150,
        width: 300,
        marginRight: 15,
        borderRadius: 6
    }
})