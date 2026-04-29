import { ElementType, ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
    className?: string
    as?: ElementType
}

export const Container = ({ children, className = '', as: Tag = 'div' }: ContainerProps) => {
    return (
        <Tag className={`w-full max-w-7xl px-6 md:px-8 ${className}`}>
            {children}
        </Tag>
    )
}