import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Video from 'react-native-video';
import {useDispatch} from 'react-redux';
import {setReelsDimensions} from '../redux/slices/reel-data-slice';
import {ReelStateType} from '../redux/states';
import {styles} from '../screens/reel-screen/style';
import RNFS from 'react-native-fs';
import {getAppDir} from '../utils/file-util';

interface Props {
  item: ReelStateType;
}

const ReelItem: FC<Props> = ({item}) => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState('');
  const dispatch = useDispatch();

  let directoryPath = '';
  let filename = '';

  if (item.video !== undefined) {
    filename = item.video.substring(item.video.lastIndexOf('-'));
    directoryPath = `${getAppDir()}/.reels/`;
  }

  useEffect(() => {
    if (item.video !== undefined) {
      const imgUrl = item.video;

      RNFS.exists(directoryPath + filename + '.mp4').then(async exists => {
        if (!exists) {
          await RNFS.mkdir(directoryPath);
          if (imgUrl !== undefined) {
            setState('');
            RNFS.downloadFile({
              fromUrl: imgUrl, // URL to download file from
              toFile: `${directoryPath}${filename}.mp4`,
            }).promise.then(r => {
              setState(directoryPath);
            });
          }
        } else {
          setState(directoryPath);
        }
      });
    }
  }, [item]);

  return (
    <View key={item?.id} style={[styles.reelStyle]}>
      {loading && (
        <View style={styles.loaderStyle}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      )}
      <>
        {
          <Video
            key={item?.id}
            source={{
              uri: `file://${directoryPath}${filename}.mp4`,
            }}
            onLoadStart={() => {
              setLoading(true);
            }}
            repeat={true}
            onLoad={({naturalSize}) => {
              const dimensions = {
                id: item.id,
                isVertical:
                  naturalSize.height > naturalSize.width ? true : false,
              };
              dispatch(setReelsDimensions(dimensions));
              setLoading(false);
            }}
            resizeMode={item?.isVertical ? 'cover' : 'contain'}
            style={styles.backgroundVideo}
          />
        }
      </>
    </View>
  );
};

export default ReelItem;
