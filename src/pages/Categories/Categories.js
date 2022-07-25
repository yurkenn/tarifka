import {FlatList, ActivityIndicator, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import CategorieCard from '../../components/Card/CategorieCard';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_CATEGORIES);

  const renderCategories = ({item}) => (
    <CategorieCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={data.categories} renderItem={renderCategories} />;
};

export default Categories;
