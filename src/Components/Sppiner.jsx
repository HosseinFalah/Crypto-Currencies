import LoadingBar from '../Asset/Sppinr.gif';

const Spinner = () => {
    return (
        <>
            <img className="w-3/4 max-h-[500px] mx-auto object-cover rounded-lg my-5" src={LoadingBar} alt="loadingBar"/>
        </>
    );
}
 
export default Spinner;