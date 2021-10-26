import React from 'react'
import { ScrollView, Text } from 'react-native'
import { useRoute } from '@react-navigation/core'

import Header from 'components/header'
import MainView from 'components/main-view'

import * as Styled from './Detail.styled'

const Detail: React.FunctionComponent = ({ navigation }: any) => {
  const route: any = useRoute()

  return route?.params ? (
    <MainView>
      <Header text={route?.params?.title} title="Details" />
      <ScrollView style={{ flex: 1 }}>
        <MainView gutter>
          <Styled.Image resizeMode="contain" source={{ uri: route?.params?.avatar }} />
          <Styled.Name>{route?.params?.name}</Styled.Name>
          <Styled.Job>{route?.params?.job}</Styled.Job>
          <Text>{route?.params?.about}</Text>
        </MainView>
      </ScrollView>
    </MainView>
  ) : null
}

export default Detail
