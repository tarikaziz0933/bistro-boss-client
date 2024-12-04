import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../../../SharedPage/MenuCard/MenuCard";

const ChefRecomends = () => {
    const [recommendItems, setRecommendItem] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const chefRecommends = data.filter(recommend => recommend.category === 'offered');
                setRecommendItem(chefRecommends);
                console.log(chefRecommends);
            })
    }, [])
    return (
        <div className="m-4">
            <SectionTitle
                heading='Should Try'
                subHeading='CHEF RECOMMENDS'
            ></SectionTitle>
            <div className="flex m-6">
                {
                    recommendItems.map(recommendItem =>
                        <MenuCard
                            key={recommendItem._id}
                            recommendItem={recommendItem}
                        ></MenuCard>
                    )
                }
            </div>
        </div >
    );
};

export default ChefRecomends;