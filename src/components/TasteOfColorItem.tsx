import style from './TasteOfColorItem.module.scss';
export interface TasteOfColorItemProps {
    imageSrc: string
    title: string
    description: string
}

const TasteOfColorItem = ({imageSrc, title, description}: TasteOfColorItemProps) => {
    return <div className={style['taste-of-color-item']}>
        <img src={imageSrc} loading="lazy" alt={`taste of color ${title?.toLocaleLowerCase}`} />
        <p className="taste-of-color-item--title">{title}</p>
        <p className="taste-of-color-item--description">{description}</p>
    </div>
}

export default TasteOfColorItem