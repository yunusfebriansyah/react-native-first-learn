import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { featuredCards } from '@/constants/data'

const Gallery = () => {
  return (
    <View className="mt-7">
      <Text className="text-black-300 text-xl font-rubik-bold">
        Gallery
      </Text>
      <FlatList
        contentContainerStyle={{ paddingRight: 20 }}
        data={featuredCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={ item.image }
            className="size-40 rounded-xl"
          />
        )}
        contentContainerClassName="flex gap-4 mt-3"
      />
    </View>
  )
}

export default Gallery