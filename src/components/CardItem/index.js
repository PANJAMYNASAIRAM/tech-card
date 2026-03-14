import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="headone">{title}</h1>
      <p className="para">{description}</p>
      <div>
        <img src={imageUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default CardItem

