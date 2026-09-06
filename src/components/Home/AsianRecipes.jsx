import { useLoaderData } from "react-router-dom";
import RecipeSquareItem from "./RecipeSquareItem";

const AsianRecipes = () => {
    const { indianRecipes } = useLoaderData();
    const { recipes } = indianRecipes || {};
    return (
        <section className="choose-your-food-section pt-120 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-55 wow fadeInDown">
                            <span className="sub-title">
                                Choose your flavor
                            </span>
                            <h2>the best food in town</h2>
                            <p>
                                Indulge in the extraordinary with Our Special
                                Pizza. A tantalizing blend of succulent
                                toppings, premium cheeses, and a secret sauce,
                                crafted to perfection.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {recipes.map((recipe) => (
                        <RecipeSquareItem key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AsianRecipes;
