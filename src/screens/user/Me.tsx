import * as React from "react"
import {View, Text, Animated, ActivityIndicator} from "react-native"
import tailwind from "tailwind-rn"
import {useUser, User} from "../../hooks/auth/useUser"
import {Avatar} from "../../components/profile/Avatar"
import {SubscriberCount} from "../../components/profile/SubscriberCount"

/**
 * Shows all information of the currently logged in user, such as
 * subscriber, subscription & post consts
 * avatar and Biography
 * shops & guestspots this user has worked/ is working at
 * all posts this user has posted/is associated with
 * options to change any of the given information
 *
 * @returns screen for my profile
 */
export default () => {
  const {user} = useUser()
  return (
    <View style={tailwind("rounded-b-lg")}>
      <View style={tailwind("mt-10 py-4 mt-4 flex items-center")}>
        <Avatar
          photoURL={user?.photoURL}
          style={tailwind("h-40 w-40")}></Avatar>
        <Text style={tailwind("mt-4 text-2xl font-medium")}>
          @{user?.username}
        </Text>
        <Text style={tailwind("text-sm text-gray-600 font-light")}>
          owner @nicershop123
        </Text>
        <View
          style={tailwind("mt-10 p-4 px-10 w-full flex-row justify-between")}>
          <SubscriberCount label="subscribers" value={253}></SubscriberCount>
          <SubscriberCount label="subscriptions" value={32}></SubscriberCount>
        </View>
      </View>
    </View>
  )
}
