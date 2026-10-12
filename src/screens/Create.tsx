
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} 

from "react-native";
import { Ionicons } from "@expo/vector-icons";

const modes = ["Video", "Short", "Live", "Post"];

export default function Create() {
  const [selectedMode, setSelectedMode] = useState("Short");
  const [duration, setDuration] = useState("15s");
  const [camera, setCamera] = useState("camera-reverse-outline");

  return (
    <View style={styles.container}>
    <View style={styles.progress}>
    <View style={styles.progressFill} />
    </View>

    <View style={styles.topControls}>
    <Pressable style={styles.circle} onPress={() => {}}>
    <Ionicons name="close" size={30} color="white" />
    </Pressable>

    <Pressable style={styles.soundButton} onPress={() => {}}>
    <Ionicons name="musical-notes" size={24} color="white" />
    <Text style={styles.controlText}>Add sound</Text>
    </Pressable>

    <Pressable style={styles.circle} onPress={() => {}}>
    <Ionicons name="sparkles" size={28} color="white" />
    </Pressable>
    </View>

    <View style={styles.rightControls}>

<Pressable
    style={styles.control}
    onPress={() =>
    setCamera((current) =>
    current === "camera-reverse-outline"
    ? "camera-outline"
    : "camera-reverse-outline" )}>

    <Ionicons name={camera} size={27} color="white" />
    </Pressable>

<Pressable
    style={styles.control}
    onPress={() =>
    setDuration((current) =>
    current === "15s" ? "60s" : current === "60s" ? "3 min" : "15s" )}>

    <Ionicons name="timer-outline" size={27} color="white" />
    <Text style={styles.controlText}>{duration}</Text>
    </Pressable>

    <Pressable style={styles.control} onPress={() => {}}>
    <Ionicons name="sparkles-outline" size={28} color="white" />
    </Pressable>

    <Pressable style={styles.control} onPress={() => {}}>
    <Text style={styles.controlText}>1x</Text>
    </Pressable>

    <Pressable style={styles.control} onPress={() => {}}>
    <Ionicons name="scan-outline" size={27} color="white" />
    </Pressable>
    </View>

    <View style={styles.bottomControls}>
    <Pressable style={styles.gallery} onPress={() => {}}>
    <Ionicons name="image-outline" size={28} color="white" />
    </Pressable>

    <Pressable style={styles.recordButton} onPress={() => {}}>
    <View style={styles.recordInner} />
    </Pressable>

    <View style={styles.modes}>
    {modes.map((mode) => (

<Pressable
    key={mode}
    onPress={() => setSelectedMode(mode)}
    style={[
    styles.mode,
    selectedMode === mode && styles.selectedMode,]}>

<Text
    style={[
    styles.modeText,
    selectedMode === mode && styles.selectedModeText,]}>

    {mode}
    </Text></Pressable>))}</View></View></View>

);

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#000",},

progress: {
  height: 5,
  backgroundColor: "#444", 
  marginHorizontal: 18,
  marginTop: 18,
  borderRadius: 5,},

progressFill: {
   width: "20%",
   height: "100%",
   backgroundColor: "#fff",
   borderRadius: 5, },

topControls: {
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
   paddingHorizontal: 18,
   marginTop: 20, },

circle: {
   width: 48,
   height: 48,
   borderRadius: 24,
   backgroundColor: "#222",
   alignItems: "center",
   justifyContent: "center", },

soundButton: {
   backgroundColor: "#222",
   borderRadius: 28,
   paddingHorizontal: 20,
   paddingVertical: 13,
   flexDirection: "row",
   alignItems: "center",
   gap: 10, },

controlText: {
   color: "#fff",
   fontSize: 14,
   fontWeight: "600", },

rightControls: {
   position: "absolute",
   right: 18,
   top: 125,
   alignItems: "center",
   gap: 25, },

control: {
   minWidth: 45,
   minHeight: 42,
   alignItems: "center",
   justifyContent: "center",
   gap: 5, },

bottomControls: {
   position: "absolute",
   bottom: 24,
   left: 18,
   right: 18,
   alignItems: "center", },

gallery: {
   position: "absolute",
   left: 0,
   bottom: 95,
   width: 48,
   height: 48,
   backgroundColor: "#222",
   borderRadius: 12,
   alignItems: "center",
   justifyContent: "center", },

recordButton: {
   width: 78,
   height: 78,
   borderRadius: 39,
   borderWidth: 5,
   borderColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
   marginBottom: 22, },

recordInner: {
   width: 50,
   height: 50,
   borderRadius: 25,
   backgroundColor: "#ddd", },

modes: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "center",
   gap: 5, },

mode: {
   paddingHorizontal: 11,
   paddingVertical: 12, 
   borderRadius: 25, },

selectedMode: {
   backgroundColor: "#333", },

modeText: {
   color: "#999",
   fontSize: 14, },

selectedModeText: {
   color: "#fff",
   fontWeight: "bold", },
  
}

);
