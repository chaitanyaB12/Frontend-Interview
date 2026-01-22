export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-white mb-3">CA MONK</h3>
          <p className="text-gray-400">
            Empowering the next generation of financial leaders with tools,
            community, and knowledge.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Webinars</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-semibold text-white mb-3">Platform</h4>
          <ul className="space-y-2">
            <li>Job Board</li>
            <li>Practice Tests</li>
            <li>Mentorship</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-white mb-3">Connect</h4>
          <ul className="space-y-2">
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-500">
        © 2026 CA Monk. All rights reserved. · Privacy Policy · Terms of Service
      </div>
    </footer>
  );
}
