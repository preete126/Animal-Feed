import Axios from "../util/axios"

export const post_purpose = (param)=>{
    return Axios.post("/calculate_feed",param)
}
export const post_preview = (param)=>{
    return Axios.post("/feed_plan",param)
}