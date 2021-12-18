import React, { Fragment } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import TopNav from '../components/TopNav'
import InputNav from '../components/InputNav'
import CatScrollView from '../components/CatScrollView'
import PubScrollView from '../components/PubScrollView'
import RestoScrollView from '../components/RestoScrollView'

export default function Home({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={{ backgroundColor: '#00CCBC' }} />
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.home}>
                <TopNav navigation={navigation} />
                <InputNav />
                <View style={styles.content_view}>
                    <ScrollView>
                        <View style={{ paddingTop: 50 }}>
                            <CatScrollView />
                            <PubScrollView />
                            <RestoScrollView title="À la une" />
                            <RestoScrollView title="Exclusivement sur Deliveroo" />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    content_view: {
        flex: 5,
        backgroundColor: 'white',
        width: '100%'
    },
})