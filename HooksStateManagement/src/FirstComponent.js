import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SecondComponent from './SecondComponent'

const FirstComponent = () => {
        return (
            <View>
                <SecondComponent />
            </View>
        )
}

export default FirstComponent