import { memo } from "react"
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../types";
import style from './index.less';

const Card = memo(({id, name, isSet, findCard, moveCard, removeCard}: any) => {
  const originalIndex = findCard(id).index;

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD, // 定义拖拽的类型，与放置时的accept相互关联
    item: {id, originalIndex},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => {
      const {id: droppedId, originalIndex} = item;
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedId, originalIndex);
      }
    }
  }), [id, originalIndex, moveCard]);

  const [, drop] = useDrop(
    // @ts-ignore
    () => ({
      accept: ItemTypes.CARD,
      hover({id: draggedId}) {
        if (draggedId !== id) {
          const {index: overIndex} = findCard(id);
          moveCard(draggedId, overIndex);
        }
      }
    }),
    [findCard, moveCard]
  );
  return (
    <>
      <div
        ref = {(node) => drag(drop(node))}
        className={style.card}
        style={{opacity: `${isDragging ? 0 : 1}`}}
      >
        {name}
        {
          isSet && <span className={style.deleteIcon} onClick={() => removeCard(originalIndex)}></span>
        }
      </div>
    </>
  )
})

export {
  Card
}