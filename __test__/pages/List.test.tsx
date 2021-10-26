import React from 'react'
import 'react-native'
import { render, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from '../../src/navigation/RootNavigation'

import List from '../../src/pages/simpsons/list'

jest.mock('@react-navigation/native')
jest.mock('@react-navigation/stack')

describe('List', () => {
  it('list page navigate to form', () => {
    const navigate = jest.fn()
    //@ts-ignore
    const { getByText } = render(<List navigation={{ navigate }} />)
    fireEvent.press(getByText('Ekle'))
    expect(navigate).toHaveBeenCalledWith('Create', { data: [], title: 'Simpsons' })
  })
})