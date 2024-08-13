import Link from "next/link";
import Header from "@/components/header"
import Navigation from "@/components/navigation"

export default async function Home() {
    return (
        <>
            <Header />
            <div className="flex-1 flex w-[90vw] py-5 max-w-5xl mx-auto">
                <Navigation />
                <div className="flex-1 flex flex-col ml-5 py-3 ">
                    <main className="flex flex-col justify-center flex-1 h-full rounded-md  shadow-md bg-white">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold mb-4">Welcome to Our CMS</h1>
                            <p className="text-lg text-gray-700 mb-8">
                                Start managing your content with ease!
                            </p>
                            <Link
                                href="/products"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Get Started
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
