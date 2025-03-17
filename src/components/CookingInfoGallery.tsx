import style from './CookingInfoGallery.module.scss'
const CookingInfoGallery = () => {
    return <div className={`${style['cooking-info-gallery']}`}>
        <div className={style['cooking-info-gallery--left']}>
            <img src="./placeholder-372-600.gif" alt="" />
        </div>
        <div className={style['cooking-info-gallery--right']}>
            <img src="./placeholder-372-295.gif" alt="" />
            <img src="./placeholder-372-295.gif" alt="" />
        </div>
    </div>
}

export default CookingInfoGallery