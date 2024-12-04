import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <ChefRecomends></ChefRecomends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;