import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: 'btn_dark_green';
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
    return (
        <button type={type} className={`${variant} flexCenter rounded-full border gap-3`}>
            {icon && <Image src={icon} alt={title} width={24} height={24}/>}
            <label htmlFor="" className="bold-16 whitespace-nowrap">{title}</label>
        </button>
    );
};

export default Button;