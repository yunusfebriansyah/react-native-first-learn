import icons from "@/constants/icons";
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import images from '@/constants/images';
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Card";
import { categories, featuredCards } from "@/constants/data";
import Filters from "@/components/Filters";
import { MasonryFlashList } from "@shopify/flash-list";
import BottomNavigation from "@/components/BottomNavigation";
import { Redirect } from "expo-router";

export default function Index() {

  // return <Redirect href='/SignIn' />

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-10">

          {/* account */}
          <View className="flex flex-row items-center justify-between mt-5">
            <View className="flex flex-row">
              <Image
                source={images.avatar}
                className="size-12 rounded-full"
              />

              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className="text-xs font-rubik text-black-100">
                  Good Morning
                </Text>
                <Text className="text-base font-rubik-medium text-black-300">
                  Yunus Febriansyah
                </Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-6" />
          </View>
          {/* end account */}

          {/* search */}
          <Search />
          {/* end search */}

          {/* featured */}
          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300">
                Featured
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-semibold text-primary-300">
                  See all
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* end featured */}
        </View>

        {/* featured card */}
        <FlatList
          data={featuredCards}
          renderItem={({ item }) => (
            <FeaturedCard item={item}/>
          )}
          keyExtractor={(item) => item.slug}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex gap-5 px-10"
        />
        {/* end featured card */}

        {/* recomendation */}
        <View className="mt-5 px-10">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Our Recommendation
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-semibold text-primary-300">
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Filters categories={categories} />
        {/* end recomendation */}

        {/* card */}
        <View className="px-8 bg-white">
          <MasonryFlashList 
            data={featuredCards}
            renderItem={({item}) => (
              <Card item={item}/>
            )}
            numColumns={2}
            keyExtractor={(item) => item.slug}
            showsVerticalScrollIndicator = {false}
            estimatedItemSize={50}
          />
        </View>
        {/* end card */}

      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
      
  );
}
