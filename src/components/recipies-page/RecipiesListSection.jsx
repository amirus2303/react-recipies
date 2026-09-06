import Recipe from "./Recipe";

const RecipiesListSection = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="tab-content">
                    <div className="row">
                        <Recipe />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecipiesListSection;
