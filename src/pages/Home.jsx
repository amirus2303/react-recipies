
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
    const galleryImages = await customFetch.get("/?limit=10&select=image, name");
    return {
        bestRatedRecipes: bestRatedRecipes.data,
        indianRecipes: indianRecipes.data,
        galleryImages: galleryImages.data
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
