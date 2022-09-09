
import { ButtonVar } from "./button";
import { onclick } from "./onclick";


const button = new ButtonVar(new Entity(), new GLTFShape("models/Square_Button.glb"), new Transform({position: new Vector3(3, 1, 3),}), onclick);    


engine.addEntity(button.get_button());
