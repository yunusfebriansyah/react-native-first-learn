import { View, Text, TouchableOpacity, Image, ImageProps } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { Link, useRouter } from 'expo-router'

interface FeaturedProps{
  item : {
    title: string,
    slug: string,
    location: string,
    price: number,
    rating: number,
    image: ImageProps,
    category: string,
  }
}

export const Card = ({ item }: FeaturedProps) => {

  const router = useRouter()
  
  const moveToDetail = () => {
    // redirect to detail page
    router.push({
      pathname: '/(root)/properties/Detail',
      params: { slug: item.slug },
    });
  };

  return (
    <TouchableOpacity
      className="border-red-500 w-full relative flex flex-row justify-center p-1"
      onPress={ moveToDetail }
    >
      <View className='w-full p-3 rounded-lg bg-white shadow shadow-black-100/20 relative'>
        <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
          <Image source={icons.star} className="size-2.5" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
            {item.rating}
          </Text>
        </View>

        <Image source={item.image} className="w-full h-40 rounded-lg" />

        <View className="flex flex-col mt-2">
          <Text className="text-base font-rubik-bold text-black-300">
            {item.title}
          </Text>
          <Text className="text-xs font-rubik text-black-100">
            {item.location}
          </Text>

          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="text-base font-rubik-bold text-primary-300">
              ${item.price}
            </Text>
            <Image
              source={icons.heart}
              className="w-5 h-5 mr-2"
              tintColor="#191D31"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const HorizontalCard = ({ item }: FeaturedProps) => {

  const router = useRouter()
  
  const moveToDetail = () => {
    // redirect to detail page
    router.push({
      pathname: '/(root)/properties/Detail',
      params: { slug: item.slug },
    });
  };

  return (
    <TouchableOpacity
      className="border-red-500 w-full relative flex flex-row justify-start p-1"
      onPress={ moveToDetail }
    >
      <View className='w-full p-3 rounded-lg bg-white shadow shadow-black-100/20 flex flex-row relative'>
        
        <View className='relative'>
          <View className="flex flex-row items-center absolute px-2 top-1 right-1 bg-white/90 p-1 rounded-full z-50">
            <Image source={icons.star} className="size-2.5" />
            <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
              {item.rating}
            </Text>
          </View>

          <Image source={item.image} className="size-24 rounded-lg" />
        </View>

        <View className="ms-2 w-60">
          <View className='flex flex-row justify-between align-top'>
            <Text className="text-base font-rubik-bold text-black-300 max-w-52">
              {item.title}
            </Text>
            <Image
              source={icons.heart}
              className="w-5 h-5 mr-2"
              tintColor="#191D31"
            />
          </View>
          <View className='flex flex-row justify-between align-bottom mt-4'>
            <Text className="text-xs font-rubik text-black-100 max-w-52">
              {item.location}
            </Text>
            <Text className="text-base font-rubik-bold text-primary-300 me-2">
              ${item.price}
            </Text>
          </View>
        </View>
        
      </View>
    </TouchableOpacity>
  )
}

export const FeaturedCard = ({ item }: FeaturedProps) => {
  
  const router = useRouter()
  
  const moveToDetail = () => {
    // redirect to detail page
    router.push({
      pathname: '/(root)/properties/Detail',
      params: { slug: item.slug },
    });
  };

  return (
    <TouchableOpacity
      className="flex flex-col items-start w-60 h-80 relative"
      onPress={moveToDetail}
    >
      <Image source={ item.image } className="size-full rounded-2xl" />

      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {item.rating}
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-bold text-white"
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text className="text-base font-rubik text-white" numberOfLines={1}>
          {item.location}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-rubik-bold text-white">
            ${item.price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  )
}