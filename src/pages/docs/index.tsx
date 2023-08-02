import { Drag } from '@/component/drag';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './index.less';

export default function DocsPage() {
  const appList = [
    {
      id: 1,
      name: "工资单",
      icon: ""
    },
    {
      id: 2,
      name: "假勤",
      icon: ""
    },
    {
      id: 3,
      name: "公告",
      icon: ""
    },
    {
      id: 4,
      name: "天气",
      icon: ""
    }
  ]; 
  return (
    <div>
      <h1 className={styles.title}>docs页面</h1>
      <DndProvider backend={HTML5Backend}>
          <Drag appList={appList} />
      </DndProvider>
    </div>
  );
}
