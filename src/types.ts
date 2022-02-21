export interface AvatarConfig {
  face: number
  eye: number
  eyebrow: number
  glass: number
  hair: number
  mouth: number
  nose: number
  accessory: number
  beard: number
  detail: number
}

export interface BackgroundShape {
  circle?: string
  rounded?: string
  square?: number
}

export type ShapeTypes = 'circle' | 'rounded' | 'square'

export interface NotionAvatarProps {
  shape?: ShapeTypes
  bgColor?: string
  config: AvatarConfig
}

export type AvatarPart = keyof AvatarConfig
