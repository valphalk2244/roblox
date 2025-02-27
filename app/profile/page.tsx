import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    Card,
    CardContent,
    // CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Link from "next/link";
// import { useRouter } from "next/navigation"
  
  

export default function Home() {
    //const router = useRouter();

  return (
      <div>
          <header>
        <Menubar className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <MenubarMenu>
        <MenubarTrigger className="hover:bg-gray-700 px-3 py-2 rounded-md">Menu</MenubarTrigger>
                      <MenubarContent className="bg-gray-800 text-white rounded-md mt-2 shadow-lg">
                      <MenubarItem key="profile" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              <Link href="/profile">หน้าหลัก</Link>
            </MenubarItem>
        <MenubarItem key="login" className="hover:bg-gray-700 px-3 py-2 rounded-md"> <Link href="/login">เข้าสู่ระบบ</Link></MenubarItem>
        <MenubarItem key="shop" className="hover:bg-gray-700 px-3 py-2 rounded-md">ลงทะเบียน</MenubarItem>
        <MenubarSeparator key="separator1" className="border-gray-700" />
        <MenubarItem key="post" className="hover:bg-gray-700 px-3 py-2 rounded-md">ตะกร้า</MenubarItem>
        <MenubarSeparator key="separator2" className="border-gray-700" />
        <MenubarItem key="about" className="hover:bg-gray-700 px-3 py-2 rounded-md">ออกจากระบบ</MenubarItem>
        </MenubarContent>
        </MenubarMenu>
        </Menubar>
          </header>
            <div className="grid grid-cols-6 gap-4 mt-6">
                {Array.from({ length: 12 }).map((_, index) => (
                    <Card key={index} className="bg-gray-800 text-white rounded-lg shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Cat Name {index + 1}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300">Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p className="text-gray-400">Card Footer</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          
    </div>
  );
}
