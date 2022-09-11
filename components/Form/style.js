import { StyleSheet } from "react-native";
import color from "../../contains/color"

const styles = StyleSheet.create({
    footer:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: 'center',
        marginHorizontal:10,
        marginBottom:15,
    },
    input:{
        width:"85%",
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal:15,
        paddingVertical:5,
        borderRadius:30,
    },
    buttonAdd:{
        width: 40,
        height: 40,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
    },
})

export default styles;