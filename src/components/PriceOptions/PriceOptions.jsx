import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const gymPriceOptions = [
          {
            'id': 1,
            'name': 'Standard',
            'price': 50,
            'features': ['Access to gym equipment', 'Locker usage', 'Basic fitness classes']
          },
          {
            'id': 2,
            'name': 'Premium',
            'price': 80,
            'features': ['Access to gym equipment', 'Locker usage', 'All fitness classes', 'Personal trainer sessions']
          },
          {
            'id': 3,
            'name': 'Student',
            'price': 30,
            'features': ['Access to gym equipment', 'Locker usage', 'Basic fitness classes (student ID required)']
          }
        ];
      
    return (
        <div>
            <h2 className="text-5xl">best prices in the town</h2>
            {
                gymPriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;