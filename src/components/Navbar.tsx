import { useAuth } from '../context/AuthContext'
import { navigate } from '../router'

export function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            className="text-lg font-semibold text-gray-900 hover:text-indigo-600"
            onClick={() => navigate('/')}
            aria-label="Go to home"
          >
            YourBrand
          </button>
        </div>

        <div className="flex items-center gap-4">
          {!user && (
            <>
              <button
                className="text-sm font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-700"
                onClick={() => navigate('/register')}
              >
                Register
              </button>
            </>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">Hi, {user.name || user.email}</span>
              <button
                className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  logout()
                  navigate('/')
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
