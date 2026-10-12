
import { Image, StyleSheet, Text, View } from "react-native";
import type { Video } from "../types";

type Props = {
video: Video;
height?: number;

};

export default function VidThumbnail({
video,
height = 210,}: 
Props) {
  return (
  <View style={[styles.container, { height }]}>
  <Image source={{ uri: video.thumbnail }}
  style={styles.image}
  resizeMode="cover"/>

    <View style={styles.duration}>
    <Text style={styles.durationText}>{video.duration}</Text>
    </View>
    </View> );

}

const styles = StyleSheet.create({
container: {
width: "100%",
backgroundColor: "#222",
overflow: "hidden",
position: "relative", },

image: {
width: "100%",
height: "100%", },

duration: {
position: "absolute",
right: 8,
bottom: 8,
backgroundColor: "rgba(0,0,0,0.85)",
paddingHorizontal: 6,
paddingVertical: 3,
borderRadius: 4, },

durationText: {
color: "#fff",
fontSize: 12,
fontWeight: "600", },
}

);
