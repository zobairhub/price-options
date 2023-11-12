
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
  const {name,features,price} = option;
  return (
    <div className='bg-purple-500 p-5 text-white rounded-lg space-y-6 flex flex-col'>
        <h2>
          <span className='text-6xl font-bold'>${price}</span>
          <span className='font-semibold'>/Month</span>
        </h2>
        <h2 className='text-3xl font-medium'>{name}</h2>
        <p className='text-xl font-thin flex-grow'>
          {features.map((feature) =>(<p key={feature}>{feature}</p>))}
        </p>
        <button className='mt-4 w-full bg-primary rounded-lg py-2 px-4 hover:bg-purple-400 hover:text-primary text-lg font-medium'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes ={
  option: PropTypes.object
}
export default PriceOption;