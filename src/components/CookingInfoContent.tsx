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
        <p>{description}</p>
        <p className="sub-content-title">{subContentTitle}</p>
        <p className="sub-content-description">{subContentDescription}</p>
    </div>
}

export default CookingInfoContent;