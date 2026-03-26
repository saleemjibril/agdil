export function PageShell({
  title,
  description,
  children,
  wide,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={`mx-auto px-4 py-10 md:py-14 ${wide ? "max-w-6xl" : "max-w-3xl"}`}
    >
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 text-lg text-neutral-600">{description}</p>
      ) : null}
      <div className="mt-8">{children}</div>
    </div>
  );
}
