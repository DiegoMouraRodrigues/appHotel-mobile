import TextField from "../ui/textFild";
import AuthContainer from "../ui/AuthContainer";


export function RenderLogin(){
    return (
             <AuthContainer
                title="Bem-vindo"
                subtitle="Faça seu login para continuar!"
                icon="hotel">
            

                <TextField
                label="E-email"
                icon="email"
                >
                </TextField>
            </AuthContainer>    
           
       
    )
}