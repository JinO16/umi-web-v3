import { memo, useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "../card";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../types";
import style from './index.less';
import { Popup } from "../popup";

const Drag = memo(({appList}: any) => {
  const [cards, setCards] = useState(appList);
  const [isSet, setIsSet] = useState(false);
  const [isShowAddPop, setIsShowAddPop] = useState(false);
  const findCard = useCallback((id) => {
    const card = cards.filter((c: any) => c.id === id)[0];
    return {
      card,
      index: cards.indexOf(card)
    }
  }, [cards]);

  const moveCard = useCallback((id, atIndex) => {
    const {card, index} = findCard(id);
    setCards(
      // 返回一个新的数组，是实现对cards.splice的过程
      update(cards, {
        $splice: [
          [index, 1],
          [atIndex, 0, card]
        ]
      })
    )
  }, [findCard, cards, setCards]);
  const [, drop] = useDrop(() =>({accept: ItemTypes.CARD}));

  const handleClickAdd = () => {
    setIsShowAddPop(true);
  }

  const handleClickSet = () => {
    setIsSet(isSet => !isSet);
  }

  const removeCard = (index: any) => {
    setCards(
      update(cards, {
        $splice: [
          [index, 1]
        ]
      })
    )
  }

  return (
    <div style={{width: 400}}>
      <div className={style.operateline}>
        <span>拖拽组件</span>
        <div>
          <button onClick={handleClickAdd}>添加</button>
          <button onClick={handleClickSet}>管理</button>
        </div>
      </div>
      <div ref={drop} className={style.applist}>
        {
          cards.map((card: any) => (
            <Card 
              key={card.id}
              id={card.id}
              name={card.name}
              isSet={isSet}
              moveCard={moveCard}
              findCard={findCard}
              removeCard={removeCard}
            />
          ))
        }
      </div>
      {
        isShowAddPop && <Popup cards={cards} setCards={setCards} setIsShowAddPop={setIsShowAddPop}/>
      }
    </div>
  )
})

export {
  Drag
}