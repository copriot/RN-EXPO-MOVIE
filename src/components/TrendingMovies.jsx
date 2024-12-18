import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-new-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");
const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5 mt-5">TrendingMovies</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};
const MovieCard = ({ item, handleClick }) => {
  //console.log("POSTERPATH GELDİİİ", item.poster_path);
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
export default TrendingMovies;
