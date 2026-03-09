import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-base py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-600">The page you requested does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded bg-black px-4 py-2 text-white">Go Home</Link>
    </div>
  );
}
