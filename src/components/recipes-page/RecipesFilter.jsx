const RecipesFilter = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="foodix-tabs style-two mb-70">
                    <ul className="nav nav-tabs wow fadeInDown">
                        <li>
                            <button
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#cat1"
                            >
                                Beef
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#cat2"
                            >
                                Grilled
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#cat3"
                            >
                                Sizzling
                            </button>
                        </li>
                        <li>
                            <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#cat4"
                            >
                                Steak Bliss
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default RecipesFilter;
