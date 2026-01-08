export interface ModalButton {
  label: string
  variant?: 'primary' | 'error' | 'outline'
  action?: () => void
}
