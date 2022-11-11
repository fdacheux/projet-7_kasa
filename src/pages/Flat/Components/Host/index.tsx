import style from './Host.module.scss'

const Host = ({ host }: any) => {
  const hostData = { ...host };
  return (
    <div className={style.hostContainer}>
      <div className={style.hostName}>{hostData.name}</div>
      <img src={hostData.picture} alt={hostData.name} className={style.avatar} />
    </div>
  );
};

export default Host;
