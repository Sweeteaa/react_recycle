const useGetDay = ()=>{
    let now = new Date() 
    let arr =[]
    let y = now.getFullYear();
    let m = now.getMonth()+1;
    let d = now.getDate();
    arr.push(y+'-'+m+'-'+d);
    return arr
}

export default useGetDay;