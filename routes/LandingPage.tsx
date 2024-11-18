import { auth } from "@/components/FIrebase";
import { Button, View, Text } from "react-native";

export default function LandingPage({navigation}){

    return(
        <View>
            <Text>EBAAA</Text>
            <Button 
            title="Fazer logoff"
            onPress={()=> 
                {
                    navigation.navigate('Login')
                    auth.signOut()
                }
            }
            />
        </View>
    )
}