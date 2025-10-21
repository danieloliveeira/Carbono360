import { MemberCard, type MemberProps } from "./MemberCard";

const teamMembers: MemberProps[] = [
  {
    name: "Membro 1",
    role: "Desenvolvedor Frontend",
    bio: "Responsável pela interface e experiência do usuário no React.",
    imageUrl: "https://github.com/shadcn.png", 
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Membro 2",
    role: "Desenvolvedor Backend",
    bio: "Responsável pela API, banco de dados e lógica de negócios.",
    imageUrl: "https://github.com/shadcn.png", 
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
  {
    name: "Membro 3",
    role: "UI/UX Designer",
    bio: "Responsável pelo design no Figma e identidade visual do projeto.",
    imageUrl: "https://github.com/shadcn.png", 
    social: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
  },
];

export function TeamSection() {
  return (
    <section className="flex-1 py-2 justify-center item-center ml-30">
      <h2 className="text-3xl font-bold text-center mb-10">Nossa Equipe</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}