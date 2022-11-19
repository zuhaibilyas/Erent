import { View, Text, Image, ScrollView } from "react-native"

import React from "react"
import LinearGradient from "react-native-linear-gradient"
export default function fahad({ }) {
  return (

    <View style={{ flex: 1 }}>

      <Image style={{ height: 30, width: 30, alignSelf: 'flex-end', paddingEnd: 30, marginTop: 20, marginEnd: 20 }} source={{ uri: 'https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg' }} />
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Text style={{ height: 60, width: 60, fontSize: 30, backgroundColor: 'pink', marginLeft: 10, borderRadius: 15, marginTop: 100, color: 'white', textAlign: 'center' }}>
          +
        </Text>
        <Text style={{ height: 160, width: 130, backgroundColor: 'pink', borderRadius: 30, marginTop: 60, marginLeft: 20, }}>
          Visa
        </Text>
        <Text style={{ height: 160, width: 170, backgroundColor: 'pink', marginTop: 60, margin: 20, borderRadius: 30 }}>
          kjd
        </Text>
      </ScrollView>
      <Text style={{ fontSize: 20, marginLeft: 10, color: 'blue', fontWeight: '500' }}>
        Activities
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View>
          <View style={{ padding: 10, backgroundColor: 'red', marginHorizontal: 10, borderRadius: 20, marginTop: 13, }}>

            <Image style={{ height: 40, width: 40, }} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/top-up-3231865-2696274.png' }} resizeMode='cover' />
          </View>

          <Text style={{ textAlign: 'center' }}>Top Up</Text>
        </View>
        <View>
          <View style={{ padding: 10, backgroundColor: 'red', marginHorizontal: 10, borderRadius: 20, marginTop: 13, }}>

            <Image style={{ height: 40, width: 40, }} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/top-up-3231865-2696274.png' }} resizeMode='cover' />
          </View>

          <Text style={{ textAlign: 'center' }}>Transfer</Text>
        </View>

        <View>
          <View style={{ padding: 10, backgroundColor: 'red', marginHorizontal: 10, borderRadius: 20, marginTop: 13, }}>

            <Image style={{ height: 40, width: 40, }} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/top-up-3231865-2696274.png' }} resizeMode='cover' />
          </View>

          <Text style={{ textAlign: 'center' }}>Withdraw</Text>
        </View>

        <View>
          <View style={{ padding: 10, backgroundColor: 'red', marginHorizontal: 10, borderRadius: 20, marginTop: 13, }}>

            <Image style={{ height: 40, width: 40, }} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/top-up-3231865-2696274.png' }} resizeMode='cover' />
          </View>

          <Text style={{ textAlign: 'center' }}>Shopping</Text>
        </View>
        <View>
          <View style={{ padding: 10, backgroundColor: 'red', marginHorizontal: 10, borderRadius: 20, marginTop: 13, }}>

            <Image style={{ height: 40, width: 40, }} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/top-up-3231865-2696274.png' }} resizeMode='cover' />
          </View>

          <Text style={{ textAlign: 'center' }}>Send</Text>
        </View>
        <View>
          <View style={{ padding: 10, backgroundColor: 'red', marginHorizontal: 10, borderRadius: 20, marginTop: 13, }}>

            <Image style={{ height: 40, width: 40, }} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/top-up-3231865-2696274.png' }} resizeMode='cover' />
          </View>

          <Text style={{ textAlign: 'center' }}>kb</Text>
        </View>

      </ScrollView>
      <View style={{ backgroundColor: 'pink', padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>
            Transactions
          </Text>
          <Image style={{ width: 20, height: 20, }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__menu_more-27-512.png' }} />
        </View>
        <View style={{ flexDirection: "row", }} >
          <Image style={{ height: 50, width: 50, marginTop: 10, borderRadius: 20 }} source={{ uri: 'https://previews.123rf.com/images/andrerosi/andrerosi2102/andrerosi210202093/164556185-plane-icon-vector-airplane-icon-vector-flight-transport-symbol-travel-illustration-holiday-symbol.jpg' }} />
          <Text style={{ marginTop: 10, fontSize: 15, marginLeft: 20, fontWeight: '500' }}>
            Flight booking
            <View>
              <Text style={{ marginLeft: 90, }}>-100.20</Text>
            </View>

          </Text>
        </View>
        <View style={{ marginLeft: 70 }}>
          <Text >
            3rd Agust 2022
          </Text>
        </View>
        <View style={{ backgroundColor: 'pink', padding: 20, borderRadius: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


          </View>
          <View style={{ flexDirection: "row", }} >
            <Image style={{ height: 50, width: 50, marginTop: 10, borderRadius: 20 }} source={{ uri: 'https://previews.123rf.com/images/andrerosi/andrerosi2102/andrerosi210202093/164556185-plane-icon-vector-airplane-icon-vector-flight-transport-symbol-travel-illustration-holiday-symbol.jpg' }} />
            <Text style={{ marginTop: 10, fontSize: 15, marginLeft: 20, fontWeight: '500' }}>
              Shopping
              <View>
                <Text style={{ marginLeft: 90, }}>-40.20</Text>
              </View>

            </Text>
          </View>
          <View style={{ marginLeft: 70 }}>
            <Text>
              32 july 2022
            </Text>
          </View>

        </View>

      </View>
    </View>
  )
}
