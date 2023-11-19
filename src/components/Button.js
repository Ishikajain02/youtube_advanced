const Button = (props) =>{
    return (
        <>
        <div className=" flex px-5 py-2 m-3 w-24 bg-gray-200 rounded-lg">
        <button>{props.name}</button>
        </div>
        </>
    )
}
export default Button;