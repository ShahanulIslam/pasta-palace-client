

const Foods = ({ food }) => {
    const { name, image, description } = food
    return (
        <div className="card sm:w-72 md:w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl mt-4">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-accent">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Foods;