import { Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './FetchProducts';
import { RootState, AppDispatch } from './store'; // Import RootState and AppDispatch

const DemoApp = () => {
  const dispatch = useDispatch<AppDispatch>(); // Type for dispatch
  const products = useSelector((state: RootState) => state.product); // Type for state

  console.log(JSON.stringify(products));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ padding: 20, borderWidth: 0.5 }}
        onPress={() => {
          dispatch(fetchProducts());
        }}
      >
        Call Api
      </Text>
    </View>
  );
};

export default DemoApp;
