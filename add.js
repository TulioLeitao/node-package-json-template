import { countries} from "./countries";

const nomeDePais = process.argv[2]
const sigla = process.argv[3]

if(!nomeDePais && !sigla) {
    console.log ("Insira um valor")
} else {
    const listaFiltrada = countries.filter ((item) => {
     return item.name.toLowerCase().includes(pais.toLowerCase())
    })
    console.log
}