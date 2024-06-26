import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./error";
const Login = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          to your account if you already have one
        </CardDescription>
      </CardHeader>
      <CardContent classname="space-y-2">
        <div className="space-y-1">
          <Input name="email" type="email" placeholder="Enter Email" />
        <Error message={"Some error"}/>
        </div>
        <div className="space-y-1">
          <Input name="password" type="email" placeholder="Enter Password" />
          <Error message={"Some error"}/>
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          {true ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;
