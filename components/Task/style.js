import { StyleSheet } from "react-native";
import color from "../../contains/color"

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor:  color.white,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
        alignItems: 'center',
    },
    square: {
        width: 46,
        height: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    even:{
        backgroundColor: color.green,
    },
    odd:{
        backgroundColor: color.second,
    },
    index: {
        color: color.white,
    },
    content:{ 
        width: "80%",
    }
})

export default styles;