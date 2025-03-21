import TasteOfColorItem, { TasteOfColorItemProps } from "./TasteOfColorItem"
import style from './TasteOfColors.module.scss'
import Title from "./Title"

const items: TasteOfColorItemProps[] = [
    {
        imageSrc: './placeholder-375-300.gif',
        title: 'Red',
        description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.'
    },
    {
        imageSrc: './placeholder-375-300.gif',
        title: 'Green',
        description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours'
    },
    {
        imageSrc: './placeholder-375-300.gif',
        title: 'White',
        description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.'
    }
]

const TasteOfColors = () => {
    return <div className={style['taste-of-colors']}>
        <Title>Taste the Colours</Title>
        <div className={style['taste-of-colors-items']}>
            {
                items.map(({ imageSrc, title, description }, index) => <TasteOfColorItem key={`taste-color-item-${index}`} imageSrc={imageSrc} title={title} description={description} />)
            }
        </div>
    </div>
}

export default TasteOfColors