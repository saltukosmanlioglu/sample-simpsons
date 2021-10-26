import React, {
  createRef,
  useState
} from 'react'
import { useRoute } from '@react-navigation/native'
import {
  Form,
  FormItem
} from 'react-native-form-component'

import { asyncStorageSave } from 'app/functions'
import Header from 'components/header'
import MainView from 'components/main-view'

import { Simpsons } from '../list/types'

const Create: React.FunctionComponent = ({ navigation }: any) => {
  const id = Math.floor(Math.random() * 10000) + 10

  const [formData, setFormData] = useState<Simpsons>({
    about: '',
    avatar: '',
    id: String(id),
    job: '',
    name: '',
  })

  const route: any = useRoute()
  const inputRef = createRef()

  const handleFieldChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSaveClick = () => {
    asyncStorageSave({ key: 'simpsons', value: [...(route?.params?.data || []), formData] })
    navigation.navigate('List')
  }

  return (
    <MainView>
      <Header text={route?.params?.title} title='Add New Character' />
      <MainView gutter>
        <Form
          buttonStyle={{ backgroundColor: '#00bfca' }}
          buttonText='Add Character'
          onButtonPress={() => handleSaveClick()}
        >
          <FormItem
            label="Name / Surname"
            isRequired
            onPressIn={() => { }}
            onPressOut={() => { }}
            value={formData.name}
            onChangeText={(name) => handleFieldChange('name', name)}
            ref={inputRef}
            asterik
            customValidation={() => ({
              status: formData.name !== '',
              message: 'İsim Soyisim giriniz'
            })}
            testID='name'
          />
          <FormItem
            label='Job Title'
            isRequired
            onPressIn={() => { }}
            onPressOut={() => { }}
            value={formData.job}
            onChangeText={(job) => handleFieldChange('job', job)}
            ref={inputRef}
            asterik
            customValidation={() => ({
              status: formData.job !== '',
              message: 'Mesleğinizi giriniz'
            })}
            testID='job'
          />
          <FormItem
            label='About Him / Her'
            isRequired
            onPressIn={() => { }}
            onPressOut={() => { }}
            value={formData.about}
            onChangeText={(about) => handleFieldChange('about', about)}
            ref={inputRef}
            asterik
            textArea
            customValidation={() => ({
              status: formData.about !== '',
              message: 'Hakkınızda bahsediniz'
            })}
            testID='about'
          />
          <FormItem
            label="Image Link"
            isRequired
            onPressIn={() => { }}
            onPressOut={() => { }}
            value={formData.avatar}
            onChangeText={(avatar) => handleFieldChange('avatar', avatar)}
            ref={inputRef}
            asterik
            customValidation={() => ({
              status: formData.avatar !== '',
              message: 'Resim linki giriniz'
            })}
            testID='avatar'
          />
        </Form>
      </MainView>
    </MainView>
  )
}

export default Create
