
export class ButtonVar {
    
    private _button: Entity;
    private _gltf: GLTFShape;
    private _transform: Transform;
    private _onclick: () => void;
  
  constructor( button: Entity, gltf: GLTFShape, transform : Transform, onclick: ()=> void) {
    this._button = button;
    this._gltf = gltf;
    this._transform =  transform;
    this._onclick = onclick;
    this._button.addComponent(this._gltf);
    this._button.addComponent(this._transform);  
    this._button.addComponent(
      new OnClick((e) => {
        this._onclick();
      })
    )
  }

public get_button(): Entity {
  return this._button;
}

public set_button(_button: Entity): void {
    this._button = _button;
}

public get_gltf(): GLTFShape {
    return this._gltf;
}

public set_gltf(_gltf: GLTFShape): void {
  this._gltf = _gltf;
  this._button.addComponent(this._gltf);
}

public get_transform(): Transform {
    return this._transform;
}

public set_transform(_transform: Transform): void {
    this._transform = _transform;
    this._button.addComponent(this._transform);
}

public get_onclick(): () => void {
  return this._onclick;
}
public set_onclick(value: () => void) {
  this._onclick = value;
  this._button.addComponent(new OnClick(this._onclick))  
}
  
  
  }
