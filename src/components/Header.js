import Image from "next/image";
import Logo from "../../public/logo.svg"
const Header = () => {
    return ( 
            <div className="flex flex-col text-white font-bold text-lg w-screen">
                <Image width={200} height={200} src={Logo} />
            </div>
     );
}
 
export default Header;