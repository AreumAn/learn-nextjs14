export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <div>This is layout for about us!</div>
    </div>
  )
}
