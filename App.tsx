import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import AuthNavigator from "./src/navigation/AuthNavigator"
import HomeNavigator from "./src/navigation/HomeNavigator"
import {ActivityIndicator, View} from "react-native"
import ChooseUsername from "./src/screens/auth/ChooseUsername"
import {navigationRef} from "./RootNavigation"
import {Providers} from "./src/context/Providers"
import {UserContext} from "./src/context/UserContext"
import tailwind from "tailwind-rn"

const CurrentNavigator: React.FC = () => {
  const state = React.useContext(UserContext)
  console.log(state)
  if (state.isLoading) {
    return (
      <View style={tailwind("w-full h-full flex justify-center items-center")}>
        <ActivityIndicator></ActivityIndicator>
      </View>
    )
  } else if (state.isLoggedIn) {
    if (state.hasUsername) {
      return <HomeNavigator></HomeNavigator>
    } else {
      return <ChooseUsername></ChooseUsername>
    }
  } else {
    return <AuthNavigator></AuthNavigator>
  }
}

export default function App() {
  return (
    <Providers>
      <NavigationContainer ref={navigationRef}>
        <CurrentNavigator></CurrentNavigator>
      </NavigationContainer>
    </Providers>
  )
}
