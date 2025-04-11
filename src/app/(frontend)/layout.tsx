import Navbar from "@/components/navbar";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="pt-20">
      <Navbar />
      {children}
    </div>
  );
}
