
import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} 

from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types";
import { videos } from "../data/Videos";
import VidCard from "../Components/VidCard";

const categories = ["Home", "Subs", "Music", "Live", "More"];

export default function Home() {
const navigation =
useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const [selectedCategory, setSelectedCategory] = useState("Home");

return (
  <View style={styles.container}>
  <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />

  <View style={styles.header}>
  <View style={styles.brand}>
  <Ionicons name="logo-youtube" size={36} color="#ff0033" />
  <Text style={styles.logoText}>YouTube</Text></View>

  <View style={styles.headerActions}>
  <Pressable onPress={() => {}}>
  <Ionicons name="notifications-outline" size={27} color="white" />
  </Pressable>
  <Pressable onPress={() => {}}>
  <Ionicons name="search-outline" size={29} color="white" />
  </Pressable></View></View>

<ScrollView 
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.categories}>

{categories.map((category) => (
<Pressable
  key={category}
  style={styles.category}
  onPress={() => setSelectedCategory(category)}>

<Text
  style={[
  styles.categoryText,
  selectedCategory === category && styles.selectedText,]}>
  {category}</Text>

{selectedCategory === category && (
  <View style={styles.underline} /> )}</Pressable> ))} </ScrollView>

  <ScrollView showsVerticalScrollIndicator={false}>
  {videos.map((video) => (
          
<VidCard
  key={video.id}
  video={video}
  onPress={() =>
  navigation.navigate("Details", { videoId: video.id })}/> ))}
  </ScrollView></View>);

}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#0f0f0f", },

header: {
height: 65,
paddingHorizontal: 15,
flexDirection: "row",
alignItems: "center",
justifyContent: "space-between", },

brand: {
flexDirection: "row",
alignItems: "center", },

logoText: {
color: "#fff",
fontSize: 25,
fontWeight: "bold",
marginLeft: 4, },

headerActions: {
flexDirection: "row",
alignItems: "center",
gap: 22, },

categories: {
maxHeight: 52,
flexGrow: 0, },

category: {
paddingHorizontal: 15,
paddingTop: 12,
alignItems: "center", },

categoryText: {
color: "#ddd",
fontSize: 17,
fontWeight: "600", },

selectedText: {
color: "#fff", },

underline: {
backgroundColor: "#ff0033",
height: 3,
width: "100%",
borderRadius: 3,
marginTop: 8, },

}

);
