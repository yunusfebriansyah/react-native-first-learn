import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'

const Comment = () => {
  return (
    <View className="mt-5">
      <View className="flex flex-col items-start">
        <View className="flex flex-row items-center">
          <Image source={images.avatar} className="size-14 rounded-full" />
          <Text className="text-base text-black-300 text-start font-rubik-bold ml-3">
            { 'John Doe' }
          </Text>
        </View>

        <Text className="text-black-200 text-base font-rubik mt-2">
          I recently moved to this apartment and it's perfect for my needs. The location is perfect, and the amenities are spot on. I highly recommend it!
        </Text>

        <View className="flex flex-row items-center w-full justify-between mt-4">
          <View className="flex flex-row items-center">
            <Image
              source={icons.heart}
              className="size-5"
              tintColor={"#0061FF"}
            />
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              120
            </Text>
          </View>
          <Text className="text-black-100 text-sm font-rubik">
            February 2025, 12th
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Comment