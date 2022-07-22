import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import ICorreios from "./correios/ICorreios";
import Transportadora from "./Transportadora/Tranportadora";


/*const transport :Icorreios=new Correios();
transport.sendCorreios();
transport.reciveCorreios();
*/
const transport : ICorreios=new TransportadoraAdapter(new Transportadora());

transport.sendCorreios();
transport.reciveCorreios();
