export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
        <p>
          © {year} YourBrand. Built with Tailwind + React. Customize freely.
        </p>
      </div>
    </footer>
  )
}

