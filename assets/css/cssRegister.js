import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFE4B5",
    },
    containerHome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFE4B5",
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
    },
    login__msg: (text='none')=>({
        fontWeight: "bold",
        fontSize: 10,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text,
    }),
    password__msg: (text='none')=>({
        fontWeight: "bold",
        fontSize: 10,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text,
    }),
    rePassword__msg: (text='none')=>({
        fontWeight: "bold",
        fontSize: 10,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text,
    }),
    email__msg: (text='none')=>({
        fontWeight: "bold",
        fontSize: 10,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text,
    }),
    login__form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    login__input: {
        backgroundColor: "#fff",
        width: '90%',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginBottom: 15,
    },
    login__btnLogar: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15,
    },
    login__buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
    },
    slider: {
        width: '90%',
    },
    sliderContainer: {
        width: '90%',
        alignItems: 'center',
    },
    radio: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radio2: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 
export {css};