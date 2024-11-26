import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";

export default function Sales(){
  return(
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-zinc-800">
            Ultimos clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto size-5"/>
        </div>
        <CardDescription>
        Novos clientes em 24 horas
      </CardDescription>
      </CardHeader> 
        <CardContent>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/Nick-Yanase.png"/>
              <AvatarFallback>NY</AvatarFallback>
            </Avatar>
          <div>
            <p className="text-sm sm:textbase font-semibold">
              Nicolas Yanase
            </p>
            <span className="text-[12px] sm:text-sm text-zinc-400">
              nicolasyanase18@gmail.com
            </span>
          </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/Nick-Yanase.png"/>
              <AvatarFallback>NY</AvatarFallback>
            </Avatar>
          <div>
            <p className="text-sm sm:textbase font-semibold">
              Nicolas Yanase
            </p>
            <span className="text-[12px] sm:text-sm text-zinc-400">
              nicolasyanase18@gmail.com
            </span>
          </div>
          </article>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/Nick-Yanase.png"/>
              <AvatarFallback>NY</AvatarFallback>
            </Avatar>
          <div>
            <p className="text-sm sm:textbase font-semibold">
              Nicolas Yanase
            </p>
            <span className="text-[12px] sm:text-sm text-zinc-400">
              nicolasyanase18@gmail.com
            </span>
          </div>
          </article>
        </CardContent>
    </Card>
  )
}