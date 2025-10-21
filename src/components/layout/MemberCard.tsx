import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react"; 

export type MemberProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social: {
    linkedin: string;
    github: string;
  };
};

export function MemberCard({ member }: { member: MemberProps }) {
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="text-center flex flex-col items-center pt-6">
      <CardHeader className="items-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={member.imageUrl} alt={member.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <CardTitle>{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
      
      <CardFooter className="flex justify-center gap-4">
        <Button asChild variant="outline" size="icon">
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a href={member.social.github} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}