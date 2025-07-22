import Image from "next/image";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full flex-shrink-0 sticky top-0 z-50">
        <Navbar />
      </header>
      <div className="flex flex-1 min-h-0">
        <aside className="w-56 bg-gray-100 flex-shrink-0 sticky top-[4rem] h-[calc(100vh-4rem)]">
          <Sidebar />
        </aside>
        <main className="flex-1 min-w-0 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
