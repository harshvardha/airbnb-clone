const Card = ({ item }) => {
    let badge = item.openSpots > 0 ? "ONLINE" : "SOLD OUT"
    return (
        <div className="card">
            <div className="card--badge">{badge}</div>
            <img src={require(`../images/${item.coverImg}`)} alt="" />
            <p className="rating">
                <img src={require("../images/star.png")} alt="" className="star" />
                {item.stats.rating}({item.stats.reviewCount}).{item.location}
            </p>
            <p>{item.title}</p>
            <p><strong>From ${item.price}</strong> / person</p>
        </div>
    )
}

export default Card