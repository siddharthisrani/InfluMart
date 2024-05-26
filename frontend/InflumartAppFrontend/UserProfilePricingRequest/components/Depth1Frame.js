import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Depth1Frame = () => {
  return (
    <View style={styles.depth1Frame8}>
      <View style={styles.depth2Frame0}>
        <View style={styles.depth3Frame0}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-01.png")}
            />
          </View>
          <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame1, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-02.png")}
            />
          </View>
          <View style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.partnerships, styles.homeTypo]}>
                Partnerships
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-03.png")}
            />
          </View>
          <View style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Post</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-04.png")}
            />
          </View>
          <View style={[styles.depth4Frame13, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>My Network</Text>
            </View>
          </View>
        </View>
        <View style={[styles.depth3Frame2, styles.depth3FrameSpaceBlock]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-05.png")}
            />
          </View>
          <View style={[styles.depth4Frame14, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth4FrameFlexBox: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.beVietnamProMedium,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  depth3FrameSpaceBlock: {
    marginLeft: 8,
    alignItems: "center",
    height: 72,
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  depth4Frame0: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    width: 24,
  },
  home: {
    color: Color.colorLightgray,
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 35,
    height: 18,
    marginTop: 4,
  },
  depth3Frame0: {
    alignItems: "center",
    width: 62,
    height: 72,
  },
  depth4Frame01: {
    borderRadius: Border.br_base,
    width: 48,
    justifyContent: "center",
  },
  partnerships: {
    color: Color.colorWhite,
  },
  depth4Frame11: {
    width: 77,
    height: 18,
    marginTop: 4,
  },
  depth3Frame1: {
    width: 77,
  },
  depth4Frame12: {
    width: 27,
    height: 18,
    marginTop: 4,
  },
  depth3Frame2: {
    width: 62,
  },
  depth4Frame13: {
    height: 36,
    width: 62,
  },
  depth4Frame14: {
    width: 40,
    height: 18,
    marginTop: 4,
  },
  depth2Frame0: {
    width: 358,
    flexDirection: "row",
    height: 72,
  },
  depth1Frame8: {
    backgroundColor: Color.colorBlack,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderTopWidth: 1,
    width: 390,
    height: 93,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
  },
});

export default Depth1Frame;
