const Sidebar = () => {
    return (
        <aside className="w-full bg-[#E3F2FD] dark:bg-slate-800/80 text-[#1976D2] dark:text-blue-300 font-sans px-4 py-6 flex flex-col justify-between min-w-0" style={{height: '100%'}}>
            <div>
                <h2 className="text-lg font-bold mb-4 text-[#1976D2] dark:text-blue-300">Navigation</h2>
                <nav className="flex flex-col gap-2">
                    <a href="#dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50 transition font-medium text-gray-900 dark:text-gray-100">
                        <span>🏠</span> Dashboard
                    </a>
                    <a href="#applications" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50 transition font-medium text-gray-900 dark:text-gray-100">
                        <span>📄</span> Applications
                    </a>
                    <a href="#settings" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/50 transition font-medium text-gray-900 dark:text-gray-100">
                        <span>⚙️</span> Settings
                    </a>
                </nav>
            </div>
            <div>
                <button className="w-full bg-[#FF6B35] text-white py-2 rounded font-semibold hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 transition">Boost Application</button>
            </div>
        </aside>
    )
}

export default Sidebar;