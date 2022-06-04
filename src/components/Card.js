const Card = () => {
    return (
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img src={require("../images/image-1.png")} alt="" />
            <p className="rating">
                <img src={require("../images/star.png")} alt="" className="star" />
                5.0(6).USA
            </p>
            <p>Life Lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}

export default Card