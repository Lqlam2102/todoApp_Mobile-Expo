import { StyleSheet } from "react-native";
import color from "./contains/color"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : color.background
    },
    scrollView: {
        marginHorizontal: 20,
        marginTop: 20,
    }
})

export default styles;