import { countries} from "./countries";

const pais = process.argv[2]

if(!pais) {
    console.log ("Insira um valor")
} else {
    const listaFiltrada = countries.filter ((item) => {
     return item.name.toLowerCase().includes(pais.toLowerCase())
    })
    console.log
}