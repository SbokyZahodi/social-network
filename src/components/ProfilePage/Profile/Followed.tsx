import { faker } from "@faker-js/faker";

const Followed = () => {
  return (
    <div className={`p-5`}>
      <div className={`m-2 text-xl`}>Followed</div>
      <div
        className={`grid grid-cols-3 p-4 h-[200px] rounded-md`}
        style={{ background: "rgba(106, 118, 136, 0.36)" }}
      >
        <div className={``}>
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-14 rounded-full "
          />
        </div>
        <div className={``}>
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-14 rounded-full "
          />
        </div>
        <div className={``}>
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-14 rounded-full "
          />
        </div>
        <div className={``}>
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-14 rounded-full "
          />
        </div>
        <div className={``}>
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-14 rounded-full "
          />
        </div>
        <div className={``}>
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-14 rounded-full "
          />
        </div>
      </div>
    </div>
  );
};
export default Followed;
