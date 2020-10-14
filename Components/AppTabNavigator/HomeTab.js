import React, { useLayoutEffect, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';
import axios from 'axios';

function HomeTab ({ navigation }) {

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ color }) => (
        <Icon name="home" style={{ color: color }} />
      )
    });
  }, [navigation]);

  // 조회한 데이터를 담을 상태값을 셋팅한다.
  const [feeds, setFeeds] = useState([]);

  // 스팀잇 데이터 조회
  // limit 는 조회할 데이터의 갯수다.
  const fetchFeeds = async () => {
    const res = await axios.post('https://api.steemit.com', {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: "kr", limit: 2 }]
      ]
    });

    if (res.data.result) {
      setFeeds(res.data.result);
    }    
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  // 데이터를 불러오는 중에 로딩 ActivityIndicator 를 사용하여 이미지와 문구를 넣어준다.
  const pageView = !feeds.length ? (
    <View>
      <ActivityIndicator animating size="large" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : 
    feeds.map((feed) => 
      <CardComponent data={feed} /> 
    )
  ;

  return (
    <Container style={styles.container}>
      <Content>
        {pageView}        
      </Content>
    </Container>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});