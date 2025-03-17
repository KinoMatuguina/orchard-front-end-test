import { useCallback } from 'react';
import style from './TasteOfColorItem.module.scss';
export interface TasteOfColorItemProps {
    imageSrc: string
    title: string
    description: string
}

const TasteOfColorItem = ({imageSrc, title, description}: TasteOfColorItemProps) => {
     const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
        e.preventDefault();
        console.log(title)
    },[])
    
    return <div className={style['taste-of-color-item']}>
        <a href="/" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, title)}>
            <img src={imageSrc} loading="lazy" alt={`taste of color ${title?.toLocaleLowerCase}`} />
            <div className={style['taste-of-color-item-content']}>
                <p className={style["taste-of-color-item-content--title"]}>{title}</p>
                <p className={style["taste-of-color-item-content--description"]}>{description}</p>
            </div>
        </a>
    </div>
}

export default TasteOfColorItem