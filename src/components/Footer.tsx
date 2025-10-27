function Footer() {
  return (
    <footer className="bg-transparent w-full py-6 mt-auto border-t border-white/10">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-center max-w-6xl">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Heba Ashraf</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

