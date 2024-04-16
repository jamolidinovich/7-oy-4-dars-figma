function Thead() {
    return (
        <>
            <thead className="w-full p-4 text-white bg-[#1A2038] my-[8px] rounded-xl">
                <tr className="flex justify-around items-center items-center">
                    <th className="text-lg text-white mr-[45px]">Brand</th>
                    <th className="text-lg text-white">Price</th>
                    <th className="text-lg text-white mr-[-12px]">Category</th>
                    <th className="text-lg text-white mr-[30px]">Status</th>
                    <th className="text-lg text-white" >Action</th>
                </tr>
            </thead>
        </>
    )
}

export default Thead
