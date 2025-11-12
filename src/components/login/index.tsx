import TextField from "../ui/textFild";
import AuthContainer from "../ui/AuthContainer";

const RenderLogin = () =>{
    return (
             <AuthContainer
                title="Bem-vindo"
                subtitle="Faça seu login para continuar!"
                icon="hotel">
            
                {/*children*/ }
                <TextField
                label="E-email"
                icon="email"
                >
                </TextField>
            </AuthContainer>    
           
       
    )
}

export default RenderLogin;