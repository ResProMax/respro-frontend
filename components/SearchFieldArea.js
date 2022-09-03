import { Typography } from "@mui/material";
import SearchField from "./SearchField";

const SearchFieldArea = ({ searchedText }) => {
  return (
    <div className="bg-slate-200 p-6 pb-12">
      <div>
        <Typography className="text-4xl sm:text-6xl font-bold text-center m-10">
          Research is creating new knowledge.
        </Typography>
      </div>
      <div>
        <SearchField searchedText={searchedText} />
      </div>
    </div>
  );
};

export default SearchFieldArea;
