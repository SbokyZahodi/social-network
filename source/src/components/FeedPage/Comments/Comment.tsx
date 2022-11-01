import defaultUserPhoto from '../../../assets/img/defaultUserPhoto.png'


const Comment = () => {
  return (
    <div className={` p-2 m-2 border-b `}>
      <div className={`flex justify-between`}>
        <div className={`flex`}>
          <img
            src={defaultUserPhoto}
            alt=""
            className="w-12 h-12 rounded-full mx-2"
          />
          <span>Vitaliy Petrovich</span>
        </div>
        <span className="text-slate-400">22:42</span>
      </div>
      <div className={`p-2 break-words `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        officia quasi odio obcaecati beatae rerum rem quidem enim dolorum sit
        modi mollitia facilis, eius, necessitatibus fuga! Voluptatem esse fuga
        iusto?
      </div>
    </div>
  );
};
export default Comment;
