import twitterLogo from '../images/twitter-logo.svg';
import discordLogo from '../images/discord-logo.svg';
import instagramLogo from '../images/instagram-logo.svg'
import royal from '../images/money.svg';
import video from '../images/video.svg';
import story from '../images/story.svg';
import faq from '../images/faq.svg';

const Header = () => {

    return (
        <div className="header fixed top-0 pt-16 pb-4 w-full bg-white z-50 bg-fixed bg-repeat-x border-b">
            <div className="container mx-auto flex justify-end">
                <ul>
                    <li className="inline-block"><a href="#royal" className="hover:underline inline-block"><img src={royal} className="h-6 w-auto mr-1 inline-block" alt="Raccoon Royalties" /> Royalties</a></li>
                    <li className="inline-block mx-2"><a href="#origin_video" className="hover:underline inline-block"><img src={video} className="h-6 w-auto mr-1 inline-block" alt="Watch our Video" /> Video</a></li>
                    <li className="inline-block mx-2"><a href="#story" className="hover:underline inline-block"><img src={story} className="h-6 w-auto mr-1 inline-block" alt="Read our story" /> Story</a></li>
                    <li className="inline-block mr-2"><a href="#faq" className="hover:underline inline-block"><img src={faq} className="h-6 w-auto mr-1 inline-block" alt="FAQs" /> FAQs</a></li>
                    <li className="inline-block mx-2"><a href="https://twitter.com/SolRaccoons/" target="_blank" rel="noreferrer" title="Link to solRaccoons twitter" className="hover:underline inline-block"> <img src={twitterLogo} className="h-4 w-auto inline-block" alt="Twitter logo" /> </a></li>
                    <li className="inline-block mx-2"><a href="https://discord.gg/WzqxZSfez5" target="_blank" rel="noreferrer" title="Link to solRaccoons discord server" className="hover:underline inline-block"> <img src={discordLogo} className="h-4 w-auto inline-block" alt="Discord logo" /> </a></li>
                    <li className="inline-block mx-2"><a href="https://www.instagram.com/solraccoons/" target="_blank" rel="noreferrer" title="Link you solRaccoons instagram" className="hover:underline inline-block"> <img src={instagramLogo} className="h-4 w-auto inline-block" alt="Instagram logo" /> </a></li>
                </ul>
            </div>
        </div>
    );

}

export default Header;