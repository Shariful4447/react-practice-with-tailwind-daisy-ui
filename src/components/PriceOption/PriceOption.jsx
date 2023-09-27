import PropTypes from 'prop-types'
const PriceOption = ({option}) => {
    console.log(option);
   
    return (
        <div>
            <h2>
                {/* <span className='text-7xl'>{option.price}</span>
                <span className='text-2xl'>{option.name}</span> */}
            </h2>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
} 

export default PriceOption;