import {
    MenuOverlay,
    AnimatedHeading,
    Header,
    Hero,
    RecipiesList,
    CtaBanner,
    AsianRecipes,
    Map,
    Video,
    Gallery,
    Footer,

} from "../components";
import customFetch from "../utils/CustomFetch";


export const loader = async () => {
    const bestRatedRecipes = await customFetch.get("/?sortBy=rating&order=desc&limit=6");
    const indianRecipes = await customFetch.get("/tag/Asian?limit=6");
    return {
        bestRatedRecipes: bestRatedRecipes.data,
        indianRecipes: indianRecipes.data
    };
};


const Home = () => {
    return (
        <>
            <MenuOverlay />
            <Header />
            <Hero />
            <AnimatedHeading />
            <RecipiesList />
            <CtaBanner />
            <AsianRecipes />
            <Map />
            <Video />
            <Gallery />
            <Footer />
        </>
    );
};
export default Home;
