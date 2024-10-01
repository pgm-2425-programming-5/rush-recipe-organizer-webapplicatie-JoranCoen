import Button from './components/common/Button';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800">Organiseer je favoriete recepten!</h1>
        <Button label="Klik hier" onClick={() => console.log('Button clicked!')} />
    </div>
  );
}