import IConsole from "./plataforms/IConsole";
import PlayStation from "./plataforms/PlayStation";
import XBox from "./plataforms/XBox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";

function startPlay(consolel:IConsole){
    console.log("Aguarde ...")
    const play = new Play(consolel);
    play.playing();
    play.result();
}
function startAdvancedPlay(console2:IConsole){
    console.log("Aguarde...");
    const adplay=new AdvancedPlay(console2);
    adplay.chalange();
    adplay.playing();
    adplay.result();
}

startPlay(new PlayStation);
startPlay(new XBox);

startAdvancedPlay(new PlayStation);
startAdvancedPlay(new XBox);