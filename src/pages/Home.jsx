import {
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
    Loader
} from "../components";


const Home = () => {
    return (
        <>
            <Loader />
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
