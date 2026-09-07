
import RecipesFilter from "./RecipesFilter";
import RecipesListSection from "./RecipesListSection";
import RecipesPageHeader from "./RecipesPageHeader";
import customFetch from "../../utils/customFetch";
import Pagination from "./Pagination";


export const loader = async ({request}) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    params.limit = params.limit || 9;
    const result = await customFetch.get("/", {params});
    return result.data;
}

const RecipesContainer = () => {
    return (
        <section className="menu-grid-section gray-bg pt-110 pb-100">
            <div className="container">
                <RecipesPageHeader />
                <RecipesFilter />
                <RecipesListSection />
                <Pagination />
            </div>
        </section>
    );
};
export default RecipesContainer;
