import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
// import Button from '@mui/material/Button';
import { IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  
  return (
    <>
      <div >
        <h2 className={css.title}>Contacts</h2>
        {children}
        <List className={css.list} >
          {contactsList.map(({ name, number, id }) => (
            <ListItem key={id} className={css.item}>
              <p>{name}: {number}</p>
              {/* <Button type="button" onClick={() => dispatch(deleteContact(id))} className={css['btn-delete']} variant="contained" size='small'>
                Delete
              </Button> */}
              <IconButton aria-label="delete" color="primary" size="large" onClick={() => dispatch(deleteContact(id))}>
                   <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default ContactList;