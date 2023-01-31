import { ButtonHTMLAttributes, ReactNode } from "react"

export enum ButtonVariants {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "Tertiary",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariants
}

export interface IContainerProps {
  variant?: ButtonVariants
}
