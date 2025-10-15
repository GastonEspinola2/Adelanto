import { useAuth } from '../context/AuthContext'
import { Container } from '../components/Container'
import { navigate } from '../router'
import { UsersChart } from '../components/charts/UsersChart'

export function Home() {
  const { user } = useAuth()

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white to-indigo-50" />
      <Container className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Generic Landing Starter
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Un layout modular listo para personalizar: navbar, footer, routing simple y
            flujo de autenticación local con Tailwind.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            {!user ? (
              <>
                <button
                  className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700"
                  onClick={() => navigate('/register')}
                >
                  Empezar (Register)
                </button>
                <button
                  className="text-sm font-semibold text-gray-700 hover:text-indigo-600"
                  onClick={() => navigate('/login')}
                >
                  Ya tengo cuenta (Login)
                </button>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-700">Sesión iniciada como {user.email}</span>
                <button
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => navigate('/register')}
                >
                  Crear otra cuenta
                </button>
              </>
            )}
          </div>
        </div>

        {user && (
          <div className="mt-16">
            <UsersChart />
          </div>
        )}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {['Rápido', 'Modular', 'Escalable'].map((title) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Texto genérico para tus beneficios o características. Cámbialo cuando
                tengas claro tu enfoque.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
