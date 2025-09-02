import PropTypes from 'prop-types';



const TeamCard = ({ name, position, image }: { name: string; position: string; image: string }) => {
    return (
        <>
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 text-center  ">
                    <div className="relative max-h-4xl overflow-hidden bg-gray-200 rounded-2xl shadow-lg group  ">
                        <img src={image} alt={"`${name}`'s picture"} className="w-full h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-white">
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-darkOrange ">{name}</h3>
                        <p className="text-lg text-darkOrange ">{position}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

TeamCard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default TeamCard;