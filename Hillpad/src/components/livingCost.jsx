export default function LivingCost({ props }) {
    return (
        <div className="text-light_black">
            <p>Let's take a  look at the average tution and living expenses in <span>{props.name}</span> </p>
            <h2 className="font-bold text-xl my-8 text-black">Average university tution fees in <span>{props.name}</span></h2>
            <p>In <span>{props.name} the fees vary based on your level, university, discipline, and country of origin. Private universities are more expensive than public ones, but overall, tuition fees for international students range between:</span></p>
            <li>1,000–30,000 CAD/year for Bachelor's degrees</li>
            <li>1,000–65,000 CAD/year for Master's degrees</li>
            <h2 className="font-bold text-xl my-8 text-black">Average cost of living in <span>{props.name}</span></h2>
            <p className="my-4">Compared to the rest of the world, Canada can be rather pricey. Especially in major cities, you may find that transportation and food have higher price stickers than most other countries.</p>
            <p className="my-4">You should prepare at least 800–1,500 CAD per month for most cities. In Vancouver or Calgary, living costs can reach 2,000 CAD per month.</p>
            <p className="my-4">Here’s a breakdown of some of the average costs for various things in Canada:</p>
            <ul className="mx-8 list-disc">
            <li>Rent (private apartment): 650–1,200 CAD/month</li>
            <li>Utilities: 230–270 CAD/month</li>
            <li>Pair of jeans: 64 CAD</li>
            <li>Monthly transportation card/ticket: 97 CAD</li>
            <li>Bottle of wine: 15 CAD</li>
            <li>Loaf of bread: 2.90 CAD</li>
            <li>Milk: 2.50 CAD</li>
            </ul>

        </div>
    )
}