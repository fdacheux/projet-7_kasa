import style from './Host.module.scss'

const Host = ({ host }: any) => {
  const hostData = { ...host };
  console.log(hostData);
  return (
    <div>
      <div>{hostData.name}</div>
      <img src={hostData.picture} alt={hostData.name} className={style.avatar} />
    </div>
  );
};

export default Host;
