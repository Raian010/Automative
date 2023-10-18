
const Addproduct = () => {
    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-center">Products <span className="text-amber-400">Adding</span></h2>
            <form className="mt-10 space-y-8 bg-gray-200 p-10">
            <input type="text" name="" placeholder="ImageURL" className="input input-bordered w-1/2" />
            <input type="text" name="" placeholder="Name" className="input input-bordered w-1/2" />
            <br />
            <input type="text" name="" placeholder="Brand Name" className="input input-bordered w-1/2" />
            <input type="text" name="" placeholder="Type" className="input input-bordered w-1/2" />
            <br />
            <input type="text" name="" placeholder="Price" className="input input-bordered w-1/2" />
            <input type="text" name="" placeholder="Description" className="input input-bordered w-1/2" />
            <br />
            <input type="text" name="" placeholder="Rating" className="input input-bordered w-2/3" />
            
            <br />
            <div className="flex justify-center">
            <input className="btn btn-neutral w-2/3" type="submit" value="Add" />
            </div>
            </form>
        </div>
    );
};

export default Addproduct;