export interface KeyValueProps {
  key: string
  value: any
}

export interface AsyncStorageLoadProps {
  getLoad: (value: string) => void
  key: string
}

export interface YesNoAlertProps {
  no?: () => void
  text: string
  title: string
  yes: () => void
}