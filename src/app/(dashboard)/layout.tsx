import Menu from "@/components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className={"flex  gap-2 min-h[100vh]"}>
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] min-h-[100vh]">
          <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white/30">
        {children}
        </div>
     </div>
   
  );
}
