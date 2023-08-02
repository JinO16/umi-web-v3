import update from "immutability-helper";
import style from './index.less';
const appList = [
  {
    id: 11,
    name: "帮助中心",
    icon: ""
  },
  {
    id: 12,
    name: "墨客",
    icon: ""
  },
  {
    id: 13,
    name: "通知",
    icon: ""
  },
];
const Popup = ({cards, setCards, setIsShowAddPop}: any) => {
  const handleAddCard = (item: any) => {
    item.isAdd = true;
    setCards(
      update(cards, {
        $push: [item]
      })
    )
  }
  return (
    <div className={style.mask}>
        <div className={style.popup}>
          <div className={style.header}>
            <span>应用列表</span>
            <button onClick={() => setIsShowAddPop(false)}>关闭</button> 
          </div>
          {
            appList.map(item => {
              return (
                <div className={style.appItem} key={item.id}>
                  <span>{item.name}</span>
                  {
                    // @ts-ignore
                    item.isAdd ? <span className={style.addText}>已添加</span> : <button onClick={() => handleAddCard(item)}>添加</button>
                  }
                  
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export {
  Popup
}