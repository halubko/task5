import type { InputWithIconInterface } from "@/shared/interfaces/inputWithIcon";

const InputWithIcon = ({ Icon, children }: InputWithIconInterface) => {
   return (
      <div className="relative">
         <Icon className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
         {children}
      </div>
   );
};

export default InputWithIcon;
