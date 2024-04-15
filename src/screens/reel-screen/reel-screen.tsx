import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ReelItem from '../../components/reelItem';
import {RootState} from '../../redux/store';
import {styles} from './style';

interface IReelsScreenProps {}

const ReelScreen: FC<IReelsScreenProps> = () => {
  const {data} = useSelector((state: RootState) => state.reelsData);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        pagingEnabled={true}
        renderItem={({item}) => {
          return <ReelItem item={item}></ReelItem>;
        }}></FlatList>
    </View>
  );
};

export default ReelScreen;
