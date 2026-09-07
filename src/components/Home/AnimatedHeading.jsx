import { useLoaderData } from "react-router-dom";

const AnimatedHeading = () => {
    const { bestRatedRecipes } = useLoaderData();
    const{ recipes } = bestRatedRecipes || {};
    return (
        <section className="animated-headline-area primary-dark-bg pt-20 pb-20">
            <div className="animated-list-wrap">
                <div className="animated-wrap">
                    {recipes.map(
                        (recipe, index) =>
                            index % 3 === 0 && (
                                <div
                                    className="animated-inner left"
                                    key={recipe.id}
                                >
                                    {recipes
                                        .slice(index, index + 3)
                                        .map((recipe) => (
                                            <span
                                                className="animated-list-item"
                                                key={recipe.id}
                                            >
                                                <b>
                                                    {recipe.name}{" "}
                                                    <i className="far fa-asterisk"></i>
                                                </b>
                                            </span>
                                        ))}
                                </div>
                            ),
                    )}
                </div>
            </div>
        </section>
    );
};
export default AnimatedHeading;
