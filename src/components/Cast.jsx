import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { fallBackPersonImage, image185 } from "../api/moviedb";

const Cast = ({ cast, navigation }) => {
  let personName = "Kanue Reevs";
  let characterName = "John Wick";
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Person", person)}
                key={index}
                className="mr-4 items-center"
              >
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    //   source={require("../../assets/splash.png")}
                    source={{
                      uri: image185(person.profile_path) || fallBackPersonImage,
                    }}
                    className="rounded-2xl h-24 w-20"
                  />
                </View>
                <Text className="text-white text-xs mt-1">
                  {person?.character.length > 10
                    ? person.character.slice(0, 10) + "..."
                    : person?.character}
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {person?.original_name.length > 10
                    ? person?.original_name?.slice(0, 10) + "..."
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Cast;

const styles = StyleSheet.create({});
