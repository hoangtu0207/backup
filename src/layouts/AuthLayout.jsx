export default function AuthLayout({ children }) {
    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="max-w-md mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}