import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 rounded-t-lg shadow fixed bottom-0 left-0 z-50">
            <div className="mx-auto max-w-screen-xl p-4 text-center md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">Sobre</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline me-4 md:me-6">Política de privacidade</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">Contato</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}