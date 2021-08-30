import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from "react-native";
import styled from "styled-components/native";
import Video from "react-native-video";
import bgVideo from './../assets/video1.mp4'
 const { width, height } = Dimensions.get("window");
const Background =() => {
    return(
        <View>
        <Video
          source={bgVideo}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }
});
export default Background;