
const MenuCard = ({ recommendItem }) => {
    const { name, recipe, image } = recommendItem;
    return (
        <div className="m-6">
            <img className="h-36" src={image} alt="" />
            <div className="">
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <button class="btn btn-outline btn-info">Add To Cart</button>
        </div>
    );
};

export default MenuCard;