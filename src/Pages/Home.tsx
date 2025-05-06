import { Helmet } from "react-helmet";
import MainSlider from "../Components/MainSlider";
import CategoriesSlider from "../Components/CategoriesSlider";
import Products from "../Components/Products";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HomePage</title>
            </Helmet>
            <MainSlider />
            <CategoriesSlider />
            <Products />
        </div>
    )
};

export default Home;
