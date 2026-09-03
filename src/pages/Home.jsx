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
} from "../components";

const Home = () => {
    return (
        <>
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
