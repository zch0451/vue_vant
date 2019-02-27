import axios from 'axios';
const Util={
    apiPath:'/api'
}

//web2/help/queryBarrageMessage
Util.ajax=axios.create({
    baseURL:Util.apiPath,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
Util.ajax.interceptors.response.use(res=>{
    return res.data;
})
export default Util;