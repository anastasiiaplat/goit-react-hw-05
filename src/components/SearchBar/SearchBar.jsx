import { Field, Form, Formik } from "formik";
import { FiSearch } from "react-icons/fi";


const SearchBar = ({ onSetSearchQuery, searchQuery }) => {
  return (
    <Formik
      initialValues={{ query: searchQuery ?? "" }}
      onSubmit={(values) => {
        onSetSearchQuery(values.query);
      }}
    >
      <Form>
        <Field
          placeholder="Input your movie"
          type="text"
          name="query"
        />
        <button  type="submit">
          <FiSearch size={18} />
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;