import { Dimensions } from "react-native";


const {width: divceWidth, height:divceHight}=Dimensions.get('window');

export const hp=(persentage:number)=>{
    return (persentage*divceHight)/100;
}

export const wp=(persentage:number)=>{
    return (persentage*divceWidth)/100;
}