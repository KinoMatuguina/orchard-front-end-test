import CookingInfoContent from './CookingInfoContent';
import CookingInfoGallery from './CookingInfoGallery';

const CookingInfo = () => {
	return (
		<div className="cooking-info">
			<CookingInfoGallery />
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
