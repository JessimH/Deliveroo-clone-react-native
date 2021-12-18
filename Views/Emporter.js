import React, { Fragment } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Text, Button } from 'react-native';
import TopNav from '../components/TopNav'
import InputNav from '../components/InputNav'
import LottieView from 'lottie-react-native';


export default function Emporter({ navigation }) {
    return (
        <Fragment>
            <SafeAreaView style={{ backgroundColor: '#00CCBC' }} />
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.emporter}>
                <TopNav navigation={navigation} />
                <InputNav />
                <View style={styles.content_view}>
                    <Text>
                        chargement des éléments
                    </Text>
                    <LottieView source={require('../assets/loader.json')} autoPlay loop style={styles.lottieCycle} />
                    <Button title="Go back" onPress={() => navigation.goBack()} />
                </View>
            </SafeAreaView>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    emporter: {
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
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottieCycle: {
        width: 320,
        backgroundColor: 'transparent'
    }
})