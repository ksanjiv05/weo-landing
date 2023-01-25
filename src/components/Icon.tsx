import Image from 'next/image';
import * as React from 'react';
import Discord from "../../public/Discord.png";

interface IDiscordIconProps {
}

const DiscordIcon: React.FunctionComponent<IDiscordIconProps> = (props) => {
    return <section>

        <div
            className="h-screen w-screen flex bg-red-500 items-center justify-center"
        > <Image src={Discord} className="h-8 w-8" alt="logo" /></div>
    </section>;
};

export default DiscordIcon;
