import { View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import dateSelector from "../ui/datePicker";

const RenderExplorer = () => {
  return (
    <AuthContainer>
        {/*children */}
            <View>
                <dateSelector label=""/>
            </View>
    </AuthContainer>
  );
};
export default RenderExplorer;