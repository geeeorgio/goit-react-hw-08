import { changeFilter } from "../../redux/filters/slice";
import Container from "../Container/Container";
import s from "./SearchContactsBox.module.css";
import { useDispatch } from "react-redux";

const SearchContactsBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value.trim();

    if (!value) {
      dispatch(changeFilter({ field: "name", value: "" }));
      dispatch(changeFilter({ field: "number", value: "" }));
      return;
    }

    const hasLetters = value.toLowerCase() !== value.toUpperCase();

    hasLetters
      ? dispatch(changeFilter({ field: "name", value }))
      : dispatch(changeFilter({ field: "number", value }));
  };

  return (
    <Container>
      <div className={s.wrapper}>
        <label className={s.label} htmlFor="searchBox">
          Find contacts
        </label>
        <input
          className={s.input}
          type="text"
          id="searchBox"
          name="searchBox"
          placeholder="Search for contacts..."
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};

export default SearchContactsBox;
