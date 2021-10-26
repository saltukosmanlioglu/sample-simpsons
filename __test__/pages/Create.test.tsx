import React from 'react'
import 'react-native'
import { render, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from '../../src/navigation/RootNavigation'

import Create from '../../src/pages/simpsons/create'

jest.mock('@react-navigation/native')
jest.mock('@react-navigation/stack')

describe('Create', () => {
  it('Crete page navigate to form', () => {
    const navigate = jest.fn()
    //@ts-ignore
    const { getByText, getByTestId } = render(<Create navigation={{ navigate }} />)
    // findByTestId('name').simulate
    fireEvent.changeText(getByTestId('name'), "saltuk")
    fireEvent.changeText(getByTestId('job'), "saltuk")
    fireEvent.changeText(getByTestId('about'), "saltuk")
    fireEvent.changeText(getByTestId('avatar'), "saltuk")
    fireEvent.press(getByText('Add Character'))
    expect(navigate).toHaveBeenCalledWith('List')
  })
})