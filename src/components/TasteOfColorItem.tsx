import style from './TasteOfColorItem.module.scss';
export interface TasteOfColorItemProps {
    imageSrc: string
    title: string
    description: string
}

const TasteOfColorItem = ({imageSrc, title, description}: TasteOfColorItemProps) => {
    return <div className={style['taste-of-color-item']}>
        <img src={imageSrc} loading="lazy" alt={`taste of color ${title?.toLocaleLowerCase}`} />
        <div className={style['taste-of-color-item-content']}>
            <p className={style["taste-of-color-item-content--title"]}>{title}</p>
            <p className={style["taste-of-color-item-content--description"]}>{description}</p>
        </div>
    </div>
}

export default TasteOfColorItem