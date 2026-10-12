
import { useState } from "react";
import { 
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View, } 

from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types";
import { videos } from "../data/Videos";
import VidCard from "../Components/VidCard";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function Details({ route, navigation }: Props) {
  const video = videos.find(
  (item) => item.id === route.params.videoId );

  const [liked, setLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

if (!video) {
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Video not found.</Text>
 </View>);

}

return (
    <ScrollView style={styles.container}>
    <View style={styles.player}>

<Image
    source={{ uri: video.thumbnail }}
    style={styles.image}
    resizeMode="cover"/>

    <Pressable style={styles.playButton} onPress={() => {}}>
    <Ionicons name="play" size={35} color="white" />
    </Pressable>
    <Text style={styles.duration}>{video.duration}</Text>
    </View>

    <View style={styles.content}>
    <Text style={styles.title}>{video.title}</Text>
    <Text style={styles.metadata}>
    {video.views} · {video.uploaded}
    </Text>

    <View style={styles.channelRow}>
    <View style={styles.avatar}>
    <Text style={styles.avatarText}>
    {video.channelName.charAt(0)}
    </Text></View>

    <View style={styles.channelInfo}>
    <Text style={styles.channelName}>{video.channelName}</Text>
    <Text style={styles.metadata}>Sample channel</Text>
    </View>

<Pressable
    style={styles.subscribeButton}
    onPress={() => setSubscribed(!subscribed)}>
    <Text style={styles.subscribeText}>
    {subscribed ? "Subscribed" : "Subscribe"}
    </Text>
    </Pressable>
    </View>

    <View style={styles.actions}>
<Pressable
    style={styles.action}
    onPress={() => setLiked(!liked)}>
<Ionicons
    name={liked ? "thumbs-up" : "thumbs-up-outline"}
    size={22}
    color="white"/>
    <Text style={styles.actionText}>
    {liked ? "Liked" : "Like"}
    </Text>
    </Pressable>

    <Pressable style={styles.action} onPress={() => {}}>
    <Ionicons name="share-outline" size={22} color="white" />
    <Text style={styles.actionText}>Share</Text>
    </Pressable>

    <Pressable style={styles.action} onPress={() => {}}>
    <Ionicons name="download-outline" size={22} color="white" />
    <Text style={styles.actionText}>Download</Text>
    </Pressable></View>

    <View style={styles.description}>
    <Text style={styles.descriptionHeading}>Description</Text>
    <Text style={styles.descriptionText}>{video.description}</Text>
    </View>

    <Text style={styles.relatedHeading}>Related videos</Text>

{videos
    .filter((item) => item.id !== video.id)
    .map((item) => (
<VidCard
    key={item.id}
    video={item}
    onPress={() =>
    navigation.replace("Details", { videoId: item.id })}/>))}</View></ScrollView>

);

}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: "#0f0f0f", },

player: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center", },

image: {
    width: "100%",
    height: "100%",
    position: "absolute", },

playButton: {
    backgroundColor: "rgba(0,0,0,0.65)",
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center", },

duration: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#111",
    color: "#fff",
    padding: 4,
    borderRadius: 4, },

content: {
    padding: 15, },

title: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
    lineHeight: 28, },

metadata: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 5, },

channelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18, },

avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#80675D",
    justifyContent: "center",
    alignItems: "center", },

avatarText: {
    color: "#fff",
    fontSize: 20, },

channelInfo: {
    flex: 1,
    marginLeft: 12, },

channelName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600", },

subscribeButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 22, },

subscribeText: {
    color: "#111",
    fontWeight: "bold", },

actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 18, },

action: {
    backgroundColor: "#272727",
    borderRadius: 22,
    paddingHorizontal: 13,
    paddingVertical: 11,
    flexDirection: "row",
    alignItems: "center",
    gap: 7, },

actionText: {
    color: "#fff",
    fontSize: 13, },

description: {
    backgroundColor: "#272727",
    padding: 14,
    borderRadius: 12,
    marginBottom: 22, },

descriptionHeading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8, },

descriptionText: {
    color: "#ddd",
    fontSize: 14,
    lineHeight: 21, },

relatedHeading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15, },

}

);
