export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-darker min-h-screen text-white">
      <nav className="bg-primary h-16 flex items-center">
        <div className="container mx-auto"></div>
      </nav>
      {children}
    </div>
  );
}
