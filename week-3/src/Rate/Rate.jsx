import '../Rate/Rate.css'

export default function Rate({title, background_title, background_price, price, speed, limite}) {
    const backgroundTitle = {
        background: background_title
    };
    const backgroundPrice = {
        background: background_price
    };
    return (
        <div className="rate">
            <div className="rate-card">
            <h4 className="rate-title" style={backgroundTitle}>{title}</h4>
            <p className="rate-price" style={backgroundPrice}>{price}</p>
            <p className="rate-speed">{speed}</p>
            <span className="rate-limite">{limite}</span>
            </div>
        </div>
    )
}
