import Header from "./Header";
import Footer from "./footer";
import Link from "next/link";
import { Montserrat_Alternates } from '@next/font/google'

const montserrat = Montserrat_Alternates({ subsets: ['latin'], weight: ['600'] })

const Layout = ({ children }) => {
    return (
        <div className="m-10 border-2 border-yellow-700">
            <div className={montserrat.className}>
                <Header />
                <div className="grid grid-cols-3 border-2 border-sky-400 m-1 w-">
                    <div className="flex flex-col justify-between border-2 border-green-400 m-1">
                        <div className="flex flex-col gap-3 font-[600] text-2xl">
                            <Link className="w-fit" href="/">what we do.</Link>
                            <Link className="w-fit" href="/approach">our approach.</Link>
                            <Link className="w-fit" href="/contact">contact.</Link>
                        </div>
                        <Footer />
                    </div>
                    <div className="col-span-2 m-1 border-2 border-pink-100">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;