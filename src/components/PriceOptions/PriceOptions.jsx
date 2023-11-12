import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
 
  const priceOptions = [
  {
    id: 1,
    name: "Basic Membership",
    features: [
      "Access to cardio equipment",
      "Access to weightlifting area",
      "Locker room access",
      "24/7 gym access",
      "Basic fitness classes",
      "Free towel service",
      "Discounts at local health food store"
    ],
    price: "30"
  },
  {
    id: 2,
    name: "Premium Membership",
    features: [
      "Access to all gym facilities",
      "Personal training sessions (2 per month)",
      "Sauna and spa access",
      "Nutritional guidance",
      "Unlimited fitness classes",
      "Access to swimming pool",
      "Complimentary protein shakes"
    ],
    price: "60"
  },
  {
    id: 3,
    name: "Student Membership",
    features: [
      "Access to cardio equipment",
      "Access to weightlifting area",
      "Locker room access",
      "Limited gym hours (weekdays only)",
      "Student ID required",
      "Discounted group fitness classes",
      "Access to study area",
      "Fitness class discount"
    ],
    price: "20"
  }
];


  return (
    <div className="p-6">
      <h1 className="text-3xl text-center"> Our Best Prices</h1>
      <div className="md:grid md:grid-cols-3 sm:space-y-10 md:space-y-0 text-center gap-6 mt-5">
        {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  );
};

export default PriceOptions;