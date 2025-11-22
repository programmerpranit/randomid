export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

