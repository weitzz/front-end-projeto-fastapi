import { useRouter } from 'next/navigation'

export default function BackButton() {
    const router = useRouter()
    return (
        <button
            type="button"
            onClick={() => router.push('/')}
            className="block px-6 py-2.5 bg-sky-600 text-neutral-100 font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-400 active:shadow-lg transition duration-150 ease-in-out">
            Voltar</button>

    )
}