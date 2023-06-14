import { Link, IRouteComponentProps} from 'umi';
import styles from './index.less';

// 全局布局，默认会在所有的路由下生效
export default function Layout({ children, location, route, history, match} : IRouteComponentProps) {
  return (
    <>
      <div className={styles.navs}>
        <h1>华夏基金智能工作平台</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <a href="https://github.com/umijs/umi">Github</a>
          </li>
        </ul>
        <input type="text" placeholder='请输入搜索内容'/>
        {/* 可以配置全局导航栏 */}
      </div>
      {children}
      {/* <Outlet /> */}
    </>
    
  );
}
