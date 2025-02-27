import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar"
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
        <MenubarItem key="login" className="hover:bg-gray-700 px-3 py-2 rounded-md">Login</MenubarItem>
        <MenubarItem key="shop" className="hover:bg-gray-700 px-3 py-2 rounded-md">Shop</MenubarItem>
        <MenubarSeparator key="separator1" className="border-gray-700" />
        <MenubarItem key="post" className="hover:bg-gray-700 px-3 py-2 rounded-md">Post</MenubarItem>
        <MenubarSeparator key="separator2" className="border-gray-700" />
        <MenubarItem key="about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</MenubarItem>
        </MenubarContent>
        </MenubarMenu>
        </Menubar>
          </header>
      <div>
        <h1 className="text-4xl text-center">Welcome to Roblox</h1>
        <p className="text-center">The best place to play games with friends</p>
        </div>
    </div>
  );
}
