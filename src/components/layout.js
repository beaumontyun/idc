import Header from "./Header";
import Footer from "./footer";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div className="mx-10">
            <Header />
            <div className="grid grid-cols-3">
                <div className="flex h-full flex-col justify-between">
                    <div className="flex flex-col gap-3 font-bold">
                        <Link href="/">what we do.</Link>
                        <Link href="/approach">our approach.</Link>
                        <Link href="/contact">contact.</Link>
                    </div>
                    <Footer />
                </div>
                <div className="col-span-2 min-h-[80vh]">{children}</div>
            </div>
            
        </div>
    );
}

export default Layout;