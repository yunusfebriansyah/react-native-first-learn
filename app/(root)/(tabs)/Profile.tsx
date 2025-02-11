import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '@/constants/icons';
import images from '@/constants/images';
import BottomNavigation from '@/components/BottomNavigation';

const Profile = () => {
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View className="px-10 flex flex-row justify-between align-middle items-center">
          <Text className="font-rubik-semibold text-lg text-black-300">Profile</Text>
          <TouchableOpacity>
            <Image source={icons.bell} className='size-6' />
          </TouchableOpacity>
        </View>

        <View className="px-10 flex flex-row justify-center align-middle items-center py-5">
          <View>
            <View className='relative'>
              <Image source={images.avatar} className='rounded-full size-36' resizeMode='contain' />
              <TouchableOpacity>
                <Image source={icons.edit} className='size-7 absolute bottom-1 right-1' resizeMode='contain' />
              </TouchableOpacity>
            </View>

            <Text className="text-lg font-rubik-semibold text-black-300 text-center mt-2">
               Adrian Hajdin
            </Text>
          </View>
        </View>

        <View className="px-10">
          <View className="border-t border-primary-100 py-4">
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.calendar} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  My Booking
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.wallet} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Payments
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
          </View>
          <View className="border-t border-primary-100 py-4">
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.profile} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Profile
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.bell} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Notification
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.shield} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Security
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.language} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Language
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.info} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Help Center
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.people} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-black-300 ms-2">
                  Invite Friends
                </Text>
              </View>
              <Image source={icons.rightArrow} className='size-5' />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row justify-between align-middle py-3">
              <View className="flex flex-row justify-start align-middle">
                <Image source={icons.logout} className='size-6' resizeMode='contain' />
                <Text className="text-sm font-rubik-medium text-red-500 ms-2">
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      <BottomNavigation/>
    </SafeAreaView>
  )
}

export default Profile