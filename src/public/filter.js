// 公用过滤器
let slice10 = time => {
    if(time){
        return time.slice(0,10)
    }
}
export { slice10 }