
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} 

from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList, Video } from "../types";
import { videos } from "../data/Videos";

function HorizontalVideo({
video, onPress, }: {video: Video;
onPress: () => void; }) {

return (
 <Pressable style={styles.horizontalCard} onPress={onPress}>
 <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
 <Text numberOfLines={2} style={styles.cardTitle}>
 {video.title}
 </Text>
 <Text style={styles.muted}>{video.channelName}</Text>
 </Pressable>

);

}

export default function Library() {
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openVideo = (videoId: string) =>
  navigation.navigate("Details", { videoId });

return (
    <ScrollView style={styles.container}>
    <View style={styles.topBar}>
    <Pressable style={styles.accounts} onPress={() => {}}>
    <Text style={styles.white}>Accounts</Text>
    <Ionicons name="chevron-down" size={20} color="white"/>
    </Pressable>
    <Ionicons name="notifications-outline" size={25} color="white"/>
    <Ionicons name="search-outline" size={26} color="white"/>
    <Ionicons name="settings-outline" size={26} color="white"/>
    </View>

    <View style={styles.profile}>
    <View style={styles.profileAvatar}>
    <Text style={styles.profileLetter}>N</Text>
    </View>
    <View style={{ flex: 1 }}>
    <Text style={styles.profileName}>Negativexyz</Text>
    <Text style={styles.muted}>@negativexyz5075</Text>
    <Text style={styles.muted}>View channel ›</Text>
    </View></View>

    <View style={styles.sectionHeading}>
    <Text style={styles.heading}>History</Text>
    <Ionicons name="chevron-forward" size={24} color="white" />
    </View>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {videos.map((video) => (
    <HorizontalVideo
    key={video.id}
    video={video}
    onPress={() => openVideo(video.id)}/> ))}</ScrollView>

    <View style={styles.sectionHeading}>
    <Text style={styles.heading}>Playlists</Text>
    <Ionicons name="add" size={30} color="white" />
    </View>

    <View style={styles.playlists}>
    <Pressable style={styles.playlist} onPress={() => openVideo("1")}>
<Image
    source={{ uri: videos[0].thumbnail }}
    style={styles.playlistImage}/>
    <Text style={styles.cardTitle}>Liked videos</Text>
    <Text style={styles.muted}>Private</Text></Pressable>

    <Pressable style={styles.playlist} onPress={() => openVideo("2")}>

<Image
    source={{ uri: videos[1].thumbnail }}
    style={styles.playlistImage}/>
    <Text style={styles.cardTitle}>Watch later</Text>
    <Text style={styles.muted}>Private</Text>
    </Pressable></View>

{[

    ["play-circle-outline", "Your videos"],
    ["film-outline", "Movies & TV"],
    ["time-outline", "Watch history"],
    ["download-outline", "Downloads"],
    ].map(([iconName, label]) => (

    <View key={label} style={styles.menuRow}>

<Ionicons
    name={iconName as keyof typeof Ionicons.glyphMap}
    size={25}
    color="white"/>
    <Text style={styles.menuText}>{label}</Text>
    </View>))}</ScrollView>

);

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#0f0f0f",},

topBar: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16, },

accounts: {
 borderWidth: 1,
 borderColor: "#555",
 borderRadius: 30,
 paddingHorizontal: 17,
 paddingVertical: 12,
 flexDirection: "row",
 alignItems: "center",
 gap: 12, },

white: {
 color: "#fff",
 fontSize: 15, },

profile: {
 flexDirection: "row",
 alignItems: "center",
 padding: 18,
 gap: 18, },

profileAvatar: {
 height: 92,
 width: 92,
 borderRadius: 46,
 backgroundColor: "#92776b",
 alignItems: "center",
 justifyContent: "center", },

profileLetter: {
 color: "#fff",
 fontSize: 48, },

profileName: {
 color: "#fff",
 fontWeight: "bold",
 fontSize: 25,
 marginBottom: 4, },

muted: {
 color: "#aaa",
 fontSize: 13,
 marginTop: 4, },

sectionHeading: {
 flexDirection: "row",
 alignItems: "center",
 paddingHorizontal: 17,
 marginTop: 25,
 marginBottom: 14,
 gap: 5, },

heading: {
 color: "#fff",
 fontSize: 22,
 fontWeight: "bold", },

horizontalCard: {
 width: 175,
 marginLeft: 16, },

thumbnail: {
 width: 175,
 height: 100,
 borderRadius: 10,
 backgroundColor: "#292929", },

cardTitle: {
 color: "#fff",
 fontSize: 14,
 fontWeight: "600",
 marginTop: 8, },

playlists: {
 flexDirection: "row",
 paddingHorizontal: 16,
 gap: 15, },

playlist: {
 flex: 1, },

playlistImage: {
 width: "100%",
 height: 110,
 borderRadius: 10,
 backgroundColor: "#292929", },

menuRow: {
 flexDirection: "row",
 alignItems: "center",
 paddingHorizontal: 22,
 paddingVertical: 17,
 gap: 28, },

menuText: {
 color: "#fff",
 fontSize: 17, },

}

);
