import { View, Text } from '@tarojs/components'
import { useState } from 'react'
import { useLoad, getCurrentPages, getCurrentInstance } from '@tarojs/taro'
import './index.less'
import { useEffect } from 'react';

export default function Index () {
  const [currentInstanceWord, setCurrentInstanceWord] = useState('');
  const [currentPageWord, setCurrentPageWord] = useState('');

  useLoad((obj) => {
    console.log('Page loaded. params===>', obj);
  })

  useEffect(() => {
    const currentPages = getCurrentPages();
    console.log('useEffect currentPages options====>', currentPages);
    setCurrentPageWord(currentPages[0]?.options?.word || '');

    const router = getCurrentInstance().router;
    console.log('router options===>', router);
    setCurrentInstanceWord(router?.params?.word || '');
  }, []);

  return (
    <View className='index'>
      <Text>getCurrentInstance获取到的word参数===   {currentInstanceWord}</Text>
      <Text>getCurrentPages获取到的word参数===   {currentPageWord}</Text>
    </View>
  )
}
