import PlanCard from "./PlanCard";
const PricePlan = () => {
  const plans = [
    {
      name: "basic",
      price: 82,
      frequency: "week",
      featured: false,
      features: [
        "The goal of a weight loss plan is to assist you in changing your lifestyle by forming new, healthy behaviors. Here, 60% of each lunch and dinner will consist of protein and 40% will consist of veggies and low-GI carbohydrates.",
        "Low Carb",
        "Lose a weight",
        "250 - 350 Cal / meal",
      ],
    },
    {
      name: "premium",
      price: 300,
      frequency: "month",
      featured: true,
      features: [
        "An Athletics plan was created for athletes and very active people. It contains extra protein for muscle gain and is based on ~1800 calories per 3 meals a day",
        "Extra Protein",
        "Gain muscle",
        "550 - 750 Cal / meal",
      ],
    },
  ];

  return (
    <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div className="grid md:grid-cols-2 md:gap-0 lg:grid-cols-2 gap-12 lg:gap-0">
        {plans.map((plan, k) => (
          <div
            key={k}
            className={`w-full max-w-md mx-auto ${
              plan.featured
                ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10"
                : "lg:transform lg:scale-90"
            }`}
          >
            <PlanCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePlan;
