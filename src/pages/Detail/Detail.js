import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {idMeal} = route.params;

  const {data, loading, error} = useFetch(`${Config.API_DETAIL}${idMeal}`);

  const renderDetail = ({item}) => <Text>{item.strInstructions}</Text>;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
