import { Dimensions } from "react-native";


const {width: divceWidth, height:divceHight}=Dimensions.get('window');

const hp=(persentage:number)=>{
    return (persentage*divceHight)/100;
}

const hw=(persentage:number)=>{
    return (persentage*divceWidth)/100;
}