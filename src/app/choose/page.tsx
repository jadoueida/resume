import Link from 'next/link';

export default function ChooseTemplate() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">Choose Resume Template</h1>
                <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
                    <Link
                        href="/"
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center flex-1"
                    >
                        <h2 className="text-xl font-semibold mb-2">Modern Template</h2>
                        <p className="text-gray-600">A contemporary design with a colorful header and modern layout</p>
                    </Link>
                    <Link
                        href="/classic"
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center flex-1"
                    >
                        <h2 className="text-xl font-semibold mb-2">Classic Template</h2>
                        <p className="text-gray-600">A traditional black and white design for formal applications</p>
                    </Link>
                </div>
            </div>
        </div>
    );
} 