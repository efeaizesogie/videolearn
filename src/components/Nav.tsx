import { LogOut, Settings, User} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";


const Nav = () => {
    return (
        <nav className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <img src="/ustackschool-logo.svg" alt="logo" className="w-28 h-20 md:w-40 " />
                </div>

                <div className="flex items-center gap-4">
                        <img src="/bell-icon.svg" alt="logo" />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>

                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/profile-pic.png" alt="Profile" />
                                    <AvatarFallback>L</AvatarFallback>
                                </Avatar>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>

    )
}
export default Nav
