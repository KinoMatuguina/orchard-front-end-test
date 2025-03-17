interface TitleProps {
    children: React.ReactNode
}

const Title = ({ children } : TitleProps) => {
    return <p className="title">{children}</p>
}

export default Title