
import RecipiesFilter from "./RecipiesFilter";
import RecipiesListSection from "./RecipiesListSection";
import RecipiesPageHeader from "./RecipiesPageHeader";

const RecipiesContainer = () => {
    return (
        <section className="menu-grid-section gray-bg pt-110 pb-100">
            <div className="container">
                <RecipiesPageHeader />
                <RecipiesFilter />
                <RecipiesListSection />
            </div>
        </section>
    );
};
export default RecipiesContainer;
