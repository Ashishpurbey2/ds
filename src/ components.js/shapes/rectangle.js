import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Transformer } from 'react-konva';

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange,color,visible }) => {
    const shapeRef = React.useRef();
    const trRef = React.useRef();

    React.useEffect(() => {
      if (isSelected) {     
        console.log(shapeRef.current.attrs.fill)
        console.log(!visible)
        trRef.current.nodes([shapeRef.current]);
        if(!visible){
          console.log('Hlll')
            shapeRef.current.attrs.fill = color.hex
          }
        else{
          console.log('jjd')
        }
        trRef.current.getLayer().batchDraw();
      }
    }, [isSelected,color]);
  
    return (
      <React.Fragment>
        <Rect
          onClick={()=>{
            console.log(shapeProps)
            onSelect();
            // onChange({
            //   ...shapeProps,
            //   fill:color.hex
            // })
          }}
          onTap={onSelect}
          ref={shapeRef}
          {...shapeProps}
          draggable
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransformEnd={(e) => {
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
  
            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              // set minimal value
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          }}
        />
        {isSelected && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )}
      </React.Fragment>
    );
  };
export default Rectangle;