//импортируем .svg картинки как компоненты Реакт
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";

//массив данных ссылок
const swLinks = [
    {
        url: "https://www.instagram.com/dazheneznaukakskazat/",
        name: "instagram_logo",
        component: <InstagramLogoSVG />,
    },
    {
        url: "https://www.youtube.com/channel/UC0FFi56d3l-uvbPkCJB7ESw/videos",
        name: "youtube_logo",
        component: <YoutubeLogoSVG />,
    },
];

export const Footer = ({ fan }) => {
    return (
        <header>
            <div className="links-layout">
                You can contact me:
                {swLinks.map((link) => (
                    <a
                        key={link.name}
                        className="link"
                        href={link.url}
                        target="_blank"
                        alt={link.name}
                        rel="noreferrer"
                    >
                        {link.component}
                    </a>
                ))}
            </div>
            <StarWarsLogoSVG />
        </header>
    );
};
