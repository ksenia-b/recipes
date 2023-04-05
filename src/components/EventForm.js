
import { useNavigate, Form } from 'react-router-dom';
// import Button from './Button/Button.stories.jsx';
import Button from './Button/Button';

import classes from './EventForm.module.css';

function EventForm({ method, event }){
    console.log("event in event form = ", event)
    const navigate = useNavigate();

    function cancelHandler() {
        navigate('..');
      }

    return <>
        <Form className={classes.form} method="post">
            <p>
                <label htmlFor="id">id</label>
                <input 
                    id="id" 
                    type="text" 
                    name="id"
                    required
                    defaultValue={event ? event.id :  (new Date()).getTime()}
                />
            </p>
            <p>
                <label htmlFor="title">Title</label>
                <input 
                    id="title" 
                    type="text" 
                    name="title"
                    required
                    defaultValue={event ? event.title : ''}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="text" name="image" required
                    defaultValue={event ? event.image : ''}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="text" name="date" required 
                    defaultValue={event ? event.date : ''}
                />
            </p>
            <p>
                <label htmlFor="short_description">Short description</label>
                <textarea id="short_description" name="short_description" rows="5" required 
                    defaultValue={event ? event.short_description : ''}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" required 
                    defaultValue={event ? event.description : ''}
                />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
               <Button text="Save"/>
            </div>
    </Form>
    </>
}

export default EventForm;