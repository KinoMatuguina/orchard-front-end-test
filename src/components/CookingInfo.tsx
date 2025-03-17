import CookingInfoContent from './CookingInfoContent';
import CookingInfoGallery from './CookingInfoGallery';
import style from './CookingInfo.module.scss';

const CookingInfo = () => {
	return (
		<div className={style["cooking-info"]}>
			<CookingInfoGallery imageLeft="./placeholder-372-600.gif" imageRight={["./placeholder-372-295.gif", "./placeholder-372-295.gif"]} />
			<CookingInfoContent 
                title={'WHAT DOES COOKING MEAN?'} 
                description={'Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...'} 
                subContentTitle="THE PERFECT EGG"
                subContentDescription='Keep water between 67 and 68°C for a flavourful, tender yolk'
            />
		</div>
	);
};

export default CookingInfo;
