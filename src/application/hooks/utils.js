import decode from 'jwt-decode'


export const checkTokenValidity = (token)=>{
    const expirationDate= decode(token).exp;
    console.log('exp', expirationDate, token);
    const isExpired= expirationDate*1000< new Date().getTime();
    return isExpired;
}

export const getUserInitials= (firstName, lastName)=>{
    if(!firstName || !lastName){
        return "";

    }
    const initals =  `${firstName.charAt(0)}${lastName.charAt(0)}`;
    return initals.toUpperCase();
};
 export const isUserAdmin= (userData)=>{
    return userData?.role?.includes('admin');
 }