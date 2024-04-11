import { Hash, Atom } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
};

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[50px] w-[65px] rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center">
          <Atom className="h-12 w-12 text-black" />
        </div>
      )}
      <p className="text-lg md:text-2xl font-semibold">
        {type === "channel" ? "Your-Journey-Your-Story" : ""}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-lg">
        {type === "channel"
          ? ""
          : `Start your conversation with ${name}`
        }
      </p>
    </div>
  )
}