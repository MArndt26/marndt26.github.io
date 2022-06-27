interface Props {}

export const HeadShot = ({}: Props) => {
  return (
    <div className="w-full h-full block">
      <span
        className="rounded-full block m-auto mb-4 bg-neutral-600"
        style={{
          width: "200px",
          height: "200px",
          boxShadow: "inset 0 0 20px #636161",
          backgroundImage: `url("https://gravatar.com/avatar/381510daba793a32d294422fa36c180c?s=200&amp;d=retro")`,
        }}
      ></span>
    </div>
  );
};
