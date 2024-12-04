import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/assets/home/featured.jpg";
import "./Featured.css"

const Featured = () => {
    return (
        <div className="Featured_item bg-fixed">
            <div className="pt-8">
                <SectionTitle
                    subHeading="Check it Out"
                    heading="FROM OUR MENU"
                ></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center py-8 px-16">
                <img className="w-96" src={featuredImage} alt="" />
                <div className="md:ml-10 text-white">
                    <h2>March 20, 2023
                        WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button class="btn btn-outline">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;