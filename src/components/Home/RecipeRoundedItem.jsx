const RecipeRoundedItem = ({ recipe }) => {
    const { name, image, rating, tags } = recipe || {};
    return (
        <div className="col-xl-4 col-md-6 col-sm-12">
            {/* <!--=== Menu Item ===--> */}
            <div className="menu-item style-seven text-center mb-35">
                <div className="menu-thumbnail">
                    <img
                        src={image || "/assets/images/menu/menu-19.png"}
                        alt={name}
                    />
                    <div className="hover-img">
                        <img
                            src="assets/images/menu/hover-af.png"
                            alt="Hover image"
                        />
                    </div>
                </div>
                <div className="menu-info">
                    <h3 className="title">
                        <a href="menu-details.html">{name}</a>
                    </h3>
                    <p>
                        {tags?.map((tag, index) => (
                            <span style={{ marginRight: '5px' }} key={index} className="tag">
                                {tag}{tags.length - 1 !== index && ", "}
                            </span>
                        ))}
                    </p>
                    <p className="price">
                        <span className="currency">Score </span> {/* */}
                        {rating}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default RecipeRoundedItem;
