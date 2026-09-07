import { useLoaderData, useNavigate, useLocation } from "react-router-dom";
const Pagination = () => {
    //Data
    const { total, skip: currentSkip } = useLoaderData();

    //URL
    const navigate = useNavigate();
    const { search, pathname } = useLocation();
    const searchParams = new URLSearchParams(search);
    const limit = 9;
    const pages = Array.from(
        { length: Math.ceil(total / limit) },
        (_, i) => i + 1,
    );

    const handlePageChange = (page) => {
        searchParams.set("limit", limit);
        searchParams.set("skip", (page - 1) * limit);
        navigate(`${pathname}?${searchParams.toString()}`);
        window.scrollTo(0, 200);
    };

    const handlePrevPage = () => {
        const limit = Number(searchParams.get("limit"));
        const skip = Number(searchParams.get("skip"));
        searchParams.set("skip", skip - limit);
        navigate(`${pathname}?${searchParams.toString()}`);
        window.scrollTo(0, 200);
    };
    const handleNextPage = () => {
        const limit = Number(searchParams.get("limit"));
        const skip = Number(searchParams.get("skip"));
        searchParams.set("skip", skip + limit);
        navigate(`${pathname}?${searchParams.toString()}`);
        window.scrollTo(0, 200);
    };
    return (
        <div className="row">
            <div className="col-lg-12">
                <ul className="foodix-pagination d-flex justify-content-center mt-20 wow fadeInDown">
                    {currentSkip !== 0 && (
                        <li>
                            <button onClick={handlePrevPage}>
                                <i className="far fa-arrow-left"></i>
                            </button>
                        </li>
                    )}
                    {pages.map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => handlePageChange(page)}
                                className={
                                    page === currentSkip / limit + 1
                                        ? "active"
                                        : ""
                                }
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    {currentSkip < total - limit && (
                        <li>
                            <button onClick={handleNextPage}>
                                <i className="far fa-arrow-right"></i>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
export default Pagination;
