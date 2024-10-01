import Link from './components/common/Link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-gray-800">Organiseer je favoriete recepten!</h1>
            <Link href="/recepten" label="klik hier" />
        </div>
    );
}
