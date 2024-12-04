
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="flex">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-20" src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>

        </div>
    );
};

export default MenuItem;