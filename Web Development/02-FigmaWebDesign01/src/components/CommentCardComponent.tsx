
interface Props {
    numCard?: number,
    comment: string,
    name: string,
    ocuppation: string,
    srcImage: string,
}
export const CommentCardComponent = ({ name, comment, ocuppation, srcImage, numCard = 1 }: Props) => {
    return (

        <div className={`comment__card comment__card--${numCard}`}>
            <h4 className={`comment__card-title  comment__card-title--${numCard}`}>{comment}</h4>
            <div className="comment__card-content">
                <div className="comment__card-content__description">
                    <h3 className="heading-3">{name}</h3>
                    <p className="comment__card-content__description--p">{ocuppation}</p>
                </div>
                <div className="comment__card-content__img">
                    <img src={srcImage} alt="user Image" />
                </div>
            </div>
        </div>

    )
}
