import { NavLink } from "react-router-dom";
const Recipe = ({ recipe }) => {
    console.log("recipe", recipe);
    const{ id, name, image, rating, cookTimeMinutes } = recipe || {};
    return (
        <div className="col-xl-4 col-md-6 col-sm-12">
            <div className="menu-item style-four mb-30">
                <div className="menu-thumbnail">
                    <img
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="menu-info">
                    <div className="menu-meta">
                        <span className="price"><span style={{ color: "black", marginRight: "5px" }}>Cuisson </span>
                            <span className="currency"></span>
                            {cookTimeMinutes} min
                        </span>
                        <span className="rating">
                            <i className="fas fa-star"></i>
                            <a href="#">{rating}</a>
                        </span>
                    </div>
                    <h4 className="title">
                        <a href="menu-details.html">{name}</a>
                    </h4>
                    <ul className="check-list style-one">
                        <li>
                            <i className="far fa-check-circle"></i>4 Piece
                            Chicken
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            Spicy Sauce
                        </li>
                    </ul>
                    <NavLink to={`/recipes/${id}`} className="theme-btn style-two">
                        <i className="fas fa-eye"></i> Voir la recette
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default Recipe;
