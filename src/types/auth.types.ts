export type AuthStep = 'email' | 'password'
export type RegisterStep = 1 | 2 | 3
export type Role = 'CUSTOMER' | 'ADMIN'
export type DeliveryType = 'HOME_DELIVERY' | 'STORE_PICKUP'

export interface PasswordStrength {
  width: string
  color: string
  label: string
}

export interface Blob {
  x: number
  y: number
  r: number
  dx: number
  dy: number
  color: string
  alpha: number
}
