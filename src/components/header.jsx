import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const user = true;
  const navigate = useNavigate();
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" className="h-16" alt="Trimmr logo" />
      </Link>
      <div>
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SG</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Shubham Gupta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Links</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
