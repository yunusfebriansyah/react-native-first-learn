import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import BottomNavigation from '@/components/BottomNavigation'
import { router } from 'expo-router'
import Search from '@/components/Search'
import Filters from '@/components/Filters'
import { categories, featuredCards } from '@/constants/data'
import { FlashList } from '@shopify/flash-list'
import { HorizontalCard } from '@/components/Card'

const Explore = () => {
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View className='px-10'>
          <View className='flex flex-row justify-between items-center align-middle'>

            <TouchableOpacity
              className='bg-primary-100 rounded-full p-3'
              onPress={()=>router.back()}
            >
              <Image source={icons.backArrow} className='size-5'/>  
            </TouchableOpacity>
            
            <Text className='font-rubik-semibold text-center'>
              Search for Your Ideal Home
            </Text>

            <TouchableOpacity
              onPress={()=>router.back()}
            >
              <Image source={icons.bell} className='size-6'/>  
            </TouchableOpacity>

          </View>

          <Search />
        </View>

        <Filters categories={categories} />

        <View className='px-9'>
          <Text className='font-rubik-semibold text-lg my-3 px-1'>Apartments</Text>

          <FlashList
            data={featuredCards}
            renderItem={({item}) => (
              <HorizontalCard item={item}/>
            )}
            keyExtractor={(item) => item.slug}
            showsVerticalScrollIndicator = {false}
            estimatedItemSize={50}
          />

        </View>

      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  )
}

export default Explore