import { useCallback } from 'react'
import style from './CookingInfoGallery.module.scss'

interface CookingInfoGalleryProps {
    imageLeft: string,
    imageRight: [string, string]
}



const CookingInfoGallery = ({imageLeft, imageRight}: CookingInfoGalleryProps) => {

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
        e.preventDefault();
        console.log(item)

    },[])

    return <div className={`${style['cooking-info-gallery']}`}>
        <div className={style['cooking-info-gallery--left']}>
            <a href="/" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, imageLeft)}>
                <img src={imageLeft} alt="" />
            </a>
        </div>
        <div className={style['cooking-info-gallery--right']}>
            {imageRight.map((image, index) => <a key={`image-right-${index}`} href="/" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, `${image}-${index}}`)}><img src={image} alt="" /></a> )}
        </div>
    </div>
}

export default CookingInfoGallery