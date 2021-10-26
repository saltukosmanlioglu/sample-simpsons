import styled from 'styled-components/native'

export const List = styled.View`
  position: relative;
  flex: 1;
`

export const Simpson = styled.TouchableOpacity`
  padding: 15px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-color: #cecece;
  border-bottom-width: 1px;
`

export const SimpsonImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 15px;
`

export const AddSimpson = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
  width: 100%;
  align-self: center;
  width: 70px;
  height: 70px;
  background-color: #00bfca;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`

export const AddSimpsonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`

export const Loader = styled.View`
  margin-top: 15px;
`