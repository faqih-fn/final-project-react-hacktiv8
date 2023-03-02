export default function Card(props) {
    const {uri, film_name} = props;

    return (
        <div className="w-60 justify-center flex-wrap-reverse relative content-center mx-5">
            <div className="w-50 h-80 z-0">
                <img src={uri} alt="" />
            </div>
            <div className="z-10 absolute bg-orange-400 w-full h-20 flex justify-center">
                <div className=" py-5 px-5 text-center overflow-y-auto">
                    <p className=" text-white">{film_name}</p>
                </div>
            </div>
        </div>
    )
}