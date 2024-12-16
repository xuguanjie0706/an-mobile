import "./Swiper.less"
import  Swiper  from "./Swiper"
import SwiperItem from "./SwiperItem"
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component"
export type { SwiperProps } from "./Swiper"
export type { SwiperItemProps } from "./SwiperItem"

export default attachPropertiesToComponent(Swiper,{SwiperItem})


