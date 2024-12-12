export default function PhotoLayout({
  children,
  aSlot,
  bSlot,
}: {
  children: React.ReactNode;
  aSlot: React.ReactNode;
  bSlot: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="px-2 py-10 bg-orange-500 mb-5">Layout</h1>
      {aSlot}
      <div className="px-2 py-10">{children}</div>
      {bSlot}
    </div>
  );
}
