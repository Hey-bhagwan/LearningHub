export default function Docs() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Docs</h1>
        <div>
            This project is made using follows :  
            <ul className="list-disc pl-8">
                <li>Frontend : ReactJS</li>
                <li>Backend : NodeJS,express</li>
                <li>Database : MongoDB</li>
                <li>Authentication : JWT</li>
                <li>Styling : TailwindCSS</li>
                
            </ul>
        </div>
        <a href="/Dashboard">
            <button className="bg-primary-button text-white p-2 rounded-lg mt-4">Go to Dashboard</button>
        </a>
        </div>
    )
}