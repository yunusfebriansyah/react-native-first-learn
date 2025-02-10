import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { Redirect } from 'expo-router'

const SignIn = () => {

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}>
        <Image
          source={images.onboarding}
          className='w-full h-4/6'
          resizeMode='contain'        
        />

        <View className='px-10'>

          <Text className='text-base uppercase font-rubik text-center color-black-200'>welcome to real scout</Text>
          <Text className='font-rubik-bold text-center text-3xl my-5 color-black-300'>Let's Get Your Closer{'\n'}To
            <Text className='color-primary-300'> Your Ideal Home</Text>
          </Text>
          <Text className='text-base text-center font-rubik color-black-200'>Login to Real Scout with Google</Text>
          
          <TouchableOpacity
              onPress={handleLogin}
              className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
            >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn