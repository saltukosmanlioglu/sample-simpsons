import { Alert } from 'react-native'

import { YesNoAlertProps } from './types'

export const yesNoAlert = ({
  title,
  text,
  yes,
  no
}: YesNoAlertProps) => {
  Alert.alert(title, text,
    [
      {
        onPress: () => {
          if (no) {
            no()
          }
        },
        style: "cancel",
        text: "Hayır",
      },
      {
        onPress: () => yes(),
        style: "destructive",
        text: "Evet",
      }
    ]
  )
}