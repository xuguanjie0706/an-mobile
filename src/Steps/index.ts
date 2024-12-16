import "./Steps.less"
import  Steps  from "./Steps"
import Step from "./Step"
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component"
export type { StepsProps } from "./Steps"
export type { StepProps } from "./Step"

export default attachPropertiesToComponent(Steps,{Step})


