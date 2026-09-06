import { useLoaderData } from "react-router-dom";


import RecipeRoundedItem from "./RecipeRoundedItem";



const RecipiesList = () => {
    const { bestRatedRecipes } = useLoaderData();
    const{ recipes } = bestRatedRecipes || {};
    console.log("recipies", bestRatedRecipes);
    return (
        <section className="menu-section pt-90 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center mb-55 wow fadeInDown">
                            <span className="sub-title">
                                Choix des visiteurs
                            </span>
                            <h2>Les recettes les mieux notées</h2>
                            <p>
                                Découvrez notre sélection de recettes les mieux
                                notées, choisies pour leurs saveurs
                                exceptionnelles et appréciées par notre
                                communauté. Laissez-vous tenter par ces plats
                                incontournables et trouvez votre prochaine
                                recette préférée.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        {/* <!--=== Foodix Tabs ===--> */}
                        <div className="tab-content wow fadeInDown">
                            <div className="row justify-content-center">
                                {recipes.map((recipe) => (
                                    <RecipeRoundedItem
                                        key={recipe.id}
                                        recipe={recipe}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default RecipiesList;
