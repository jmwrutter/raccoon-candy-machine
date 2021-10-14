import trashPandaImg from '../images/captain-trash-panda.png';

const CaptainTrashPanda = () => {
    return (
        <div id="CaptainTrashPanda" className="fixed bottom-0 right-0 ml-auto">
            <img src={trashPandaImg} alt="Captain Trash Panda" className="h-24 w-24 md:h-48 md:w-48" />
        </div>
    )
}

export default CaptainTrashPanda;