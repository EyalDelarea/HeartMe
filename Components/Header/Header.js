import React from 'react'
import { View, Text ,Image} from 'react-native'
import logo from '../../static/heartLogo.png';
const Header = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={{ width: 50, height: 50, margin: 10 }}
                    source={logo}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>HeartMe</Text>
            </View>
        </View>
    )
}

export default Header
