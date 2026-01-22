export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-blue-600">CA</span>
          <span>MONK</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Tools</a>
          <a href="#" className="hover:text-black">Practice</a>
          <a href="#" className="hover:text-black">Events</a>
          <a href="#" className="hover:text-black">Job Board</a>
          <a href="#" className="hover:text-black">Points</a>
        </nav>

        <button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700">
          Profile
        </button>
      </div>
    </header>
  );
}
