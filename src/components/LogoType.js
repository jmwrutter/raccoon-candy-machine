import twitterLogo from '../images/twitter-logo.svg';
import discordLogo from '../images/discord-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';
import royal from '../images/money.svg';
import video from '../images/video.svg'
import story from '../images/story.svg';
import faq from '../images/faq.svg';

const LogoType = (props) => {
    return (
        <>
            <div className={`${props.fontColor} ${props.fontSize} ${props.fontWeight} mt-24`}>{props.type}</div>
            <div className="text-xl pb-2">trash pandas are coming!</div>
            <div className="py-2"><a href="#royal" className="hover:underline inline-block"> <img src={royal} className="h-6 w-auto mr-4 inline-block" alt="Royalties" /> Raccoon Royalties</a></div>
            <div className="py-2"><a href="#origin_video" className="hover:underline inline-block"> <img src={video} className="h-6 w-auto mr-4 inline-block" alt="Read our story" /> Watch our Origin Video </a></div>
            <div className="py-2"><a href="#story" className="hover:underline inline-block"> <img src={story} className="h-6 w-auto mr-4 inline-block" alt="Read our story" /> Read our story</a></div>
            <div className="py-2"><a href="#faq" className="hover:underline inline-block"> <img src={faq} className="h-6 w-auto mr-4 inline-block" alt="FAQs" /> Frequently Asked Questions</a></div>
            <div className="py-2"><a href="https://twitter.com/SolRaccoons/" target="_blank" rel="noreferrer" title="Link to solRaccoons twitter" className="hover:underline inline-block"> <img src={twitterLogo} className="h-6 w-auto mr-4 inline-block" alt="Twitter logo" /> follow along on twitter</a></div>
            <div className="py-2 flex-initial"><a href="https://discord.gg/WzqxZSfez5" target="_blank" rel="noreferrer" title="Link to solRaccoons discord server" className="hover:underline inline-block"> <img src={discordLogo} className="h-6 w-auto mr-4 inline-block" alt="Discord logo" />join our discord</a></div>
            <div className="py-2 flex-initial"><a href="https://www.instagram.com/solraccoons/" target="_blank" rel="noreferrer" title="Link you solRaccoons instagram" className="hover:underline inline-block"> <img src={instagramLogo} className="h-6 w-auto mr-4 inline-block" alt="Instagram logo" /> find us on instagram </a></div>
        </>
    );
}

export default LogoType;