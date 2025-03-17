import style from './CookingInfoGallery.module.scss'
const CookingInfoGallery = () => {
    return <div className={`${style['cooking-info-gallery']}`}>
        <div>
            <img src="./placeholder-372-600.gif" alt="" />
        </div>
        <div>
            <img src="./placeholder-372-295.gif" alt="" />
            <img src="./placeholder-372-295.gif" alt="" />
        </div>
    </div>
}

export default CookingInfoGallery