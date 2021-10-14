import framedSkeleton from '../images/framed-skeleton.jpg';

const Royalties = () => {
    return (
        <div id="royal" className="" style={{ backgroundColor: '#A830F7' }}>
            <div className="container mx-auto min-h-screen py-36 text-white w-3/4 md:w-2/3">
                <div className="text-3xl mb-12 font-bold">Raccoon Royalties</div>
                
                <div className="my-8 leading-loose text-lg">
                    <img src={framedSkeleton} alt="framed skeleton" align="left" className="h-64 w-auto mr-8 mb-8" />
                    Raccoon Kingdom is all about the community and in addition to your amazing piece of art, Kingdom membership, and utility keyed access to special content, we are excited to announce “Royalties for all”. Our Raccoon treasury will be made from 50% of all royalties.  Every verified Raccoon holder will be gifted royalty air drops on a regular basis based on how many raccoons they hold and when they purchased their raccoon.  We will be doing a 2 tier launch that will guarantee a higher level of treasure for early buyers. 30% of all treasury distributions will be gifted to the initial 770 Minters during our 1st launch if they continue to hold their original Raccoon NFTs.  That’s 30% divided among a small group who continue to HOLD their NFTs, as time goes by that group will become smaller which will result in greater profits to the true Holders! Another 20% will be gifted to all Minters in the Primary launch who hold their raccoons. Royalties for All!
                </div>
                
                <div className="leading-loose text-lg">Remember, you have to hold the Raccoons in your wallet when we take our snapshots to receive your royalty payments! Raise the floor!!!</div>                
            </div>
        </div>
    )
}

export default Royalties;