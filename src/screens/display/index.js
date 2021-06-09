import { useRoute } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Display = () => {
    const route = useRoute()
    const data = route.params?.asroidDetails
    return (
        <View>
            <Text>{data.name}</Text>
            <Text>{data.nasa_jpl_url}</Text>
            <Text>{JSON.stringify(data.is_potentially_hazardous_asteroid)}</Text>
        </View>
    )
}

export default Display
