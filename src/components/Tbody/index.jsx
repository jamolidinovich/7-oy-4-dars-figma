
function Tbody(props) {


    return (
        <>
            <tbody className="w-full p-4 text-white bg-[#1F2A40] my-[8px] rounded-xl " >
                <tr className="flex justify-between items-center items-center">
                   
                    <td className="flex gap-4 items-center">
                            <img src={props.picture} alt="" />
                        <div>
                            <h1 className="text-sm">{props.title}</h1>
                            <p className="text-[#59626E]">{props.gmail}</p>
                        </div>
                    </td>
                    <td  className="text-sm">{props.price}</td>
                    <td  className="text-sm">{props.text}</td>
                    <td className="text-sm">{props.status}</td>
                    <td>
                        <div className="flex gap-5 items-center">
                            <span ><i className="fa-solid fa-eye text-[#59626E] cursor-pointer hover:text-white text-xl	w-[24px] h-[24px] transition duration-200 ease-in-out"></i></span>
                            <span ><i className="fa-solid fa-pen text-[#59626E] cursor-pointer hover:text-white text-xl	w-[24px] h-[24px] transition duration-200 ease-in-out"></i></span>
                            <span ><i className="fa-regular fa-trash-can text-[#59626E] cursor-pointer hover:text-white text-xl	w-[24px] h-[24px] transition duration-200 ease-in-out"></i></span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default Tbody
