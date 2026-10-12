
import {
Pressable,
StyleSheet,
Text,
View,

} 

from "react-native";
import type { Video } from "../types";
import VidThumbnail from "./VidThumbnail";

type Props = {
video: Video;
onPress: () => void;

};

export default function VidCard({ video, onPress }: Props) {

  return (
  <Pressable style={styles.card} onPress={onPress}>
  <VidThumbnail video={video} />

    <View style={styles.info}>
    <View style={styles.avatar}>
    <Text style={styles.avatarText}>
    {video.channelName.charAt(0)}
    </Text></View>

    <View style={styles.textContainer}>
    <Text style={styles.title}>{video.title}</Text>
    <Text style={styles.metadata}>
    {video.channelName} · {video.views} · {video.uploaded}
    </Text></View>

    <Text style={styles.menu}>⋮</Text>
    </View>
    </Pressable>

);

}

const styles = StyleSheet.create({
card: {
marginBottom: 20, },

info: {
flexDirection: "row",
alignItems: "flex-start",
paddingHorizontal: 12,
paddingTop: 12, },

avatar: {
width: 42,
height: 42,
borderRadius: 21,
backgroundColor: "#80675D",
justifyContent: "center",
alignItems: "center",
marginRight: 12, },

avatarText: {
color: "#fff",
fontSize: 19,
fontWeight: "bold", },

textContainer: {
flex: 1, },

title: {
color: "#f5f5f5",
fontSize: 16,
fontWeight: "600",
lineHeight: 22, },

metadata: {
color: "#aaa",
fontSize: 12,
marginTop: 5,
lineHeight: 18, },

menu: {
color: "#fff",
fontSize: 23,
marginLeft: 8, },

}

);
