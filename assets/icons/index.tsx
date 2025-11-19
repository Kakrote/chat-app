import { Colors } from '@/constants/theme'
import React from 'react'
import LeftArrow from './LeftArrow'
import User from './User'

const icons = {
    leftArrow: LeftArrow,
    user:User
} as const

type IconName = keyof typeof icons

interface IconsProps {
    name: IconName
    size?: number
    color?: string 
    className?: string
}

const Icon = ({ name, color, size, className }: IconsProps) => {
    const IconComponent = icons[name]
    
    return (
        <IconComponent
            size={size}
            color={color || Colors.light.primary}
            className={className}
        />
    )
}

export default Icon    