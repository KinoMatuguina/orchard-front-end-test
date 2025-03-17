import Title from "./Title";
import style from './CookingInfoContent.module.scss'

interface CookingInfoContentProps {
    title: React.ReactNode
    description: string
    subContentTitle: string
    subContentDescription: string
}

const CookingInfoContent = ({ title, description, subContentTitle, subContentDescription  }: CookingInfoContentProps) => {
    return <div className={style['cooking-info-content']}>
        <Title>{title}</Title>
        <div className={style['cooking-info-content--description']}>
            <p className={style['content-description']}>{description}</p>
            <p className={style['sub-content-title']}>{subContentTitle}</p>
            <p className={style['sub-content-description']}>{subContentDescription}</p>
        </div>
    </div>
}

export default CookingInfoContent;