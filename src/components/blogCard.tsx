import PropTypes from 'prop-types';


const blogCard = ({ image, title, desc }: { image: string; title: string; desc: string }) => {
    return (
        <>
            <div className='border border-gray-200 p-5 rounded-3xl shadow-lg ' >
                <img src={image} alt="Pic" className='mx-auto' />
                <p className='py-5 pl-2 text-lg font-bold ' >
                    {title}
                </p>
                <p className='text-base pb-5 pl-2 ' >
                    {desc}
                </p>
            </div>
        
        
        
        </>
    );
};

blogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default blogCard;