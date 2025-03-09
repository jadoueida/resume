import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Tootsie</h1>
        <p className="text-xl text-center mb-8 text-white-700">Choose a Resume Template</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
          <Link
            href="/modern"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center flex-1"
          >
            <h2 className="text-2xl text-black font-semibold mb-4">Modern Template</h2>
            <p className="text-gray-600 mb-4">A contemporary design with a clean layout and modern styling</p>
            <div className="inline-block bg-gray-800 text-white px-4 py-2 rounded">
              View Template
            </div>
          </Link>
          <Link
            href="/classic"
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center flex-1"
          >
            <h2 className="text-2xl text-black font-semibold mb-4">Classic Template</h2>
            <p className="text-gray-600 mb-4">A traditional black and white design for formal applications</p>
            <div className="inline-block bg-black text-white px-4 py-2 rounded">
              View Template
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
