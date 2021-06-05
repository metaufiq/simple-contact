import { StackNavigationOptions } from "@react-navigation/stack";
import { ComponentClass, FunctionComponent } from "react";
import ContactDetail from "../layouts/pages/ContactDetail";
import Home from "../layouts/pages/Home";

interface StackRoute {
    name: string;
    options?: StackNavigationOptions;
    component: ComponentClass<any, any> | FunctionComponent<any>;
  }
const stack: StackRoute[] = [
{name:'Home',
component:Home
},
{name:'ContactDetail',
component:ContactDetail
}

]
export default stack;
