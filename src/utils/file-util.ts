import { Platform } from "react-native";
import RNFS from "react-native-fs";

export const getAppDir = () => {
  return Platform.OS === "android"
    ? RNFS.ExternalDirectoryPath
    : RNFS.DocumentDirectoryPath;
};
