import { getMyPeddingPreview } from '@/service/servers';
import { history } from 'umi';
import styles from './index.less';

export const Yay = () => <img src={require('../../assets/yay.jpg')}/>

export default function IndexPage() {
  const handleJump = () => {
    console.log('跳转', location);
    history.push({
      pathname: '/docs',
      state: 1
    });
  }

  const handleRequestServer = () => {
    console.log('点击调用接口');
    getMyPeddingPreview({
        method: 'getHomeData',
        dataType: 'toview'
    }).then(info => {
        console.log('info---->', info);
    }, err => {
        console.log('err===>', err);
    })
  }
  return (
    <div className={styles.bgc}>
      <h2 className={styles.h2}>Yay! Welcome to umi!</h2>
      <p>
        <Yay />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <a href="http://10.16.4.86:8089/ekpsj16/portal/workflow.jsp?showIframeType=daiban" target='_blank'>跳转到流程中</a>
      <button onClick={handleJump}>跳转到docs</button>
      <button onClick={handleRequestServer}>点击调用接口</button>
    </div>
  );
}
