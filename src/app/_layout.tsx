import { Slot } from "expo-router"

export default function RootLayout(){
    {/* slot atribui ao fluxo de navegação "cjild" o papel de definir como
     as telas navegarão entre si (ex. :(auth) ou /(tabs), sem impor uma forma de 
     navegação no nivel raiz)  */}
     return <Slot/>
}