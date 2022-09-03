import { Typography } from "@mui/material";

const ThumbnailCard = ({ id, title, subTitle, card, active, setActive }) => {
  const onClick = () => {
    if (active.id == id) {
      return null;
    }
    setActive(card);
  };

  return (
    <div
      onClick={() => onClick()}
      className={`w-11/12 ${
        active.id == id ? "bg-slate-400 scale-105" : "bg-slate-200"
      } m-1 shadow-sm drop-shadow-sm rounded-xl flex flex-col-reverse hover:bg-slate-400 hover:scale-105 transition-all`}
      id={id}
    >
      <div className="p-3">
        <Typography className="text-2xl">{title}</Typography>
        <Typography>{subTitle}</Typography>
      </div>
    </div>
  );
};

export default ThumbnailCard;
