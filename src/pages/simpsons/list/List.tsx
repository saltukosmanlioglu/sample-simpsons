import React, {
  useCallback,
  useState
} from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import {
  asyncStorageLoad,
  asyncStorageSave,
  yesNoAlert
} from 'app/functions'
import Header from 'components/header'

import * as Styled from './List.styled'
import { Simpsons } from './types'

const List: React.FunctionComponent = ({ navigation }: any) => {
  const [storage, setStorage] = useState<Array<Simpsons>>([])

  const getSimpson = () => {
    if (storage && storage.length === 0) {
      fetch('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
        .then((response) => response.json())
        .then((data) => {
          asyncStorageSave({ key: 'simpsons', value: data })
          setStorage(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const handleDeleteClick = (simpson: Simpsons, index: number) => {
    yesNoAlert({
      title: 'Kayıt Silinsin mi ?',
      text: `Simpson ailesinden ${simpson.name} kaydı silinsin mi ?`,
      yes: () => {
        const newData = [...storage.slice(0, index), ...storage.slice(index + 1)]
        asyncStorageSave({ key: 'simpsons', value: newData })
        setStorage(newData)
      }
    })
  }

  useFocusEffect(
    useCallback(() => {
      asyncStorageLoad({
        key: 'simpsons',
        getLoad: (value) => {
          const parsed = JSON.parse(value)
          if (parsed.length === 0) {
            getSimpson()
          } else {
            setStorage(parsed)
          }
        }
      })
    }, [])
  )

  return (
    <Styled.List>
      <Header title='Simpsons' />
      <ScrollView>
        {storage && storage.map((simpson, index) => (
          <Styled.Simpson
            key={simpson.id}
            testID='simpson'
            onPress={() => navigation.navigate('Detail', { title: 'Simpsons', ...simpson })}
          >
            <Styled.SimpsonImage resizeMode="contain" source={{ uri: simpson.avatar }} />
            <Text>{simpson.name}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteClick(simpson, index)}
              style={{ marginLeft: 'auto' }}
            >
              <Text style={{ color: 'red' }}>Sil</Text>
            </TouchableOpacity>
          </Styled.Simpson>
        ))}
      </ScrollView>
      <Styled.AddSimpson onPress={() => navigation.navigate('Create', { title: 'Simpsons', data: storage })}>
        <Styled.AddSimpsonText>Ekle</Styled.AddSimpsonText>
      </Styled.AddSimpson>
    </Styled.List >
  )
}

export default List
