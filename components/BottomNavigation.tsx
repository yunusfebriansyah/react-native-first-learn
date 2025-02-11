import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import { router, usePathname } from 'expo-router'

const BottomNavigation = () => {

  const active = usePathname()

  return (
    <View className='flex flex-row px-10 py-4 justify-between items-center align-middle border-t border-primary-200' style={{ 
      marginBottom: -35
     }}>
      <TouchableOpacity
        className='flex justify-center items-center'
        onPress={()=>{ router.navigate('/') }}
      >
          <Image source={ active == '/' ? icons.homeActive : icons.home } className='size-6' resizeMode='contain' />
          <Text className={active == '/' ? 'font-rubik text-xs text-primary-300 mt-1' : 'font-rubik text-xs text-black-200 mt-1'}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex justify-center items-center'
        onPress={()=>{ router.navigate('/Explore') }}
      >
          <Image source={ active == '/Explore' ? icons.exploreActive : icons.explore } className='size-6' resizeMode='contain' />
          <Text className={active == '/Explore' ? 'font-rubik text-xs text-primary-300 mt-1' : 'font-rubik text-xs text-black-200 mt-1'}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex justify-center items-center'
        onPress={()=>{ router.navigate('/Profile') }}
      >
          <Image source={ active == '/Profile' ? icons.profileActive : icons.profile } className='size-6' resizeMode='contain' />
          <Text className={active == '/Profile' ? 'font-rubik text-xs text-primary-300 mt-1' : 'font-rubik text-xs text-black-200 mt-1'}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomNavigation