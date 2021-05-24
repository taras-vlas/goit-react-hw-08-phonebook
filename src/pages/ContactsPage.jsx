import { useSelector, useDispatch } from "react-redux";
import Contacts from "../components/Contacts";
import ContactList from "../components/ContactList";
import actions from "../redux/phoneBook/actions";
import { getFilter, getIsLoading } from "../redux/phoneBook/selectors";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const filter = useSelector(getFilter); //from redux

  const handleFilter = (filterText) =>
    dispatch(actions.changeFilter(filterText));

  const handleChange = (e) => {
    const filter = e.target.value;

    handleFilter(filter);
  };

  return (
    <Container maxWidth="md">
      <Box bgcolor="info.main" color="info.contrastText" p={2}>
        <span>Find:</span>
        <input
          className="input"
          type="text"
          value={filter}
          name="filter"
          onChange={handleChange}
        />
        <Contacts />
      </Box>

      {isLoading && <p>Loading...</p>}
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
