import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, FileText, Folder, Settings } from 'lucide-react';
import { Dashboard } from './admin/dashboard';
import { Projects } from './admin/projects';
import { Posts } from './admin/posts';
import { Settings as SettingsPage } from './admin/settings';

export function Admin() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="w-64 bg-white border-r">
        <nav className="p-4 space-y-2">
          <Link
            to="/admin"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            to="/admin/projects"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
          >
            <Folder className="w-5 h-5" />
            Projects
          </Link>
          <Link
            to="/admin/posts"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
          >
            <FileText className="w-5 h-5" />
            Blog Posts
          </Link>
          <Link
            to="/admin/settings"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}