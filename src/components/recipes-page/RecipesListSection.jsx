import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const RecipiesListSection = () => {

    const { recipes } = useLoaderData();
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="tab-content">
                    <div className="row">
                        {recipes.map((recipe)=>(<Recipe key={recipe.id} recipe={recipe} />))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecipiesListSection;
