import { View, Text, ScrollView, Dimensions, Image, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '@/constants/images';
import { router, useLocalSearchParams } from "expo-router";
import icons from '@/constants/icons';
import { getDataBySlug } from '@/constants/data';
import Comment from '@/components/Comment';
import Location from '@/components/Location';
import Gallery from '@/components/Gallery';

const Detail = () => {
  const windowHeight = Dimensions.get("window").height;
  const params = useLocalSearchParams<{ slug: string }>();

  const item = getDataBySlug(params.slug)

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 bg-white"
      >
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image
            source={item?.image}
            className="size-full"
            resizeMode="cover"
          />
          <Image
            source={images.whiteGradient}
            className="absolute top-0 w-full z-40"
          />

          <View
            className="z-50 absolute inset-x-7"
            style={{
              top: Platform.OS === "ios" ? 70 : 20,
            }}
          >
            <View className="flex flex-row items-center w-full justify-between">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <View className="flex flex-row items-center gap-3">
                <Image
                  source={icons.heart}
                  className="size-7"
                  tintColor={"#191D31"}
                />
                <Image source={icons.send} className="size-7" />
              </View>
            </View>
          </View>
        </View>

        <View className="px-5 mt-7 flex gap-2">

          <Text className="text-2xl font-rubik-bold">
            {item?.title}
          </Text>

          <View className="flex flex-row items-center gap-3">
            <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full">
              <Text className="text-xs font-rubik-bold text-primary-300 uppercase">
                {item?.category}
              </Text>
            </View>

            <View className="flex flex-row items-center gap-2">
              <Image source={icons.star} className="size-5" />
              <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
                {item?.rating}
              </Text>
            </View>
          </View>

          <View className="flex flex-row items-center mt-1">
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
              <Image source={icons.bed} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              4 Beds
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.bath} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              3 Baths
            </Text>
            <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
              <Image source={icons.area} className="size-4" />
            </View>
            <Text className="text-black-300 text-sm font-rubik-medium ml-2">
              1 sqft
            </Text>
          </View>

          <View className="w-full border-t border-primary-200 pt-7 mt-5">
            <Text className="text-black-300 text-xl font-rubik-bold">
              Agent
            </Text>

            <View className="flex flex-row items-center justify-between mt-4">
              <View className="flex flex-row items-center">
                <Image
                  source={ images.avatar }
                  className="size-14 rounded-full"
                />

                <View className="flex flex-col items-start justify-center ml-3">
                  <Text className="text-lg text-black-300 text-start font-rubik-bold">
                    { 'Natasya Wilodra' }
                  </Text>
                  <Text className="text-sm text-black-200 text-start font-rubik-medium">
                    { 'ntsya@example.com' }
                  </Text>
                </View>
              </View>

              <View className="flex flex-row items-center gap-3">
                <Image source={icons.chat} className="size-7" />
                <Image source={icons.phone} className="size-7" />
              </View>
            </View>

            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Overview
              </Text>
              <Text className="text-black-200 text-base font-rubik mt-2">
                Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.
              </Text>
            </View>

            <View className="mt-7">
              <Text className="text-black-300 text-xl font-rubik-bold">
                Facilities
              </Text>

              <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">

                <View
                  className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                >
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image
                      source={icons.area}
                      className="size-6"
                    />
                  </View>

                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                  >
                    Area
                  </Text>
                </View>
                <View
                  className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                >
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image
                      source={icons.carPark}
                      className="size-6"
                    />
                  </View>

                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                  >
                    Car Parking
                  </Text>
                </View>
                <View
                  className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                >
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image
                      source={icons.wifi}
                      className="size-6"
                    />
                  </View>

                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                  >
                    Free Wifi
                  </Text>
                </View>
                <View
                  className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                >
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image
                      source={icons.laundry}
                      className="size-6"
                    />
                  </View>

                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                  >
                    Laundry
                  </Text>
                </View>
                <View
                  className="flex flex-1 flex-col items-center min-w-16 max-w-20"
                >
                  <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <Image
                      source={icons.run}
                      className="size-6"
                    />
                  </View>

                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-black-300 text-sm text-center font-rubik mt-1.5"
                  >
                    Sport Center
                  </Text>
                </View>

              </View>
            </View>

            <Gallery />

            <Location />

            <View className="mt-7">
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  <Image source={icons.star} className="size-6" />
                  <Text className="text-black-300 text-xl font-rubik-bold ml-2">
                    4.9 (12) reviews
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text className="text-primary-300 text-base font-rubik-bold">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>

              <Comment />

            </View>

          </View>

        </View>

      </ScrollView>

      <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-200 p-7">
        <View className="flex flex-row items-center justify-between gap-10">
          <View className="flex flex-col items-start">
            <Text className="text-black-200 text-xs font-rubik-medium">
              Price
            </Text>
            <Text
              numberOfLines={1}
              className="text-primary-300 text-start text-2xl font-rubik-bold"
            >
              Rp {'1.200.000'}
            </Text>
          </View>

          <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow shadow-zinc-400">
            <Text className="text-white text-lg text-center font-rubik-bold">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Detail