import { NavLink } from "react-router-dom";

const RecipeSquareItem = ({ recipe }) => {
    const { id, name, image, rating, tags } = recipe || {};
    return (
        <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                <div className="menu-thumbnail">
                    <img src={image} alt={name} />
                </div>
                <div className="menu-info">
                    <h3 className="title">
                        <NavLink to={`/recipies/${id}`} onClick={() => window.scrollTo(0, 0)}>{name}</NavLink>
                    </h3>
                    <p>
                        {tags?.map((tag, index) => (
                            <span
                                style={{ marginRight: "5px" }}
                                key={index}
                                className="tag"
                            >
                                {tag}
                                {tags.length - 1 !== index && ", "}
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
export default RecipeSquareItem;
