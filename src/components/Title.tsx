import style from './Title.module.scss'
interface TitleProps {
    children: React.ReactNode
}

const Title = ({ children } : TitleProps) => {
    return <p className={style['title']}>{children}</p>
}

export default Title