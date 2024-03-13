import './ContactForm.css';

const ContactForm = () => {
  return (
    <form>
      <div className='form-control'>
        <label className='form-label' htmlFor=''>
          Name
        </label>
        <input className='form-input' type='text' name='' id='' />
      </div>

      <div className='form-control'>
        <label className='form-label' htmlFor=''>
          Email
        </label>
        <input className='form-input' type='email' name='' id='' />
      </div>

      <div className='form-control'>
        <label className='form-label' htmlFor=''>
          Phone Number
        </label>
        <input className='form-input' type='tel' name='' id='' />
      </div>

      <div className='form-control'>
        <label className='form-label' htmlFor=''>
          In Reference To
        </label>
        <select name='' id=''>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
          <option value=''></option>
        </select>
      </div>

      <div className='form-control'>
        <label className='form-label' htmlFor=''>
          Your Thoughts
        </label>
        <textarea
          className='form-textarea'
          name=''
          id=''
          cols='30'
          rows='10'
        ></textarea>
      </div>

      <div className='form-group'>
        <button type='button'>Cancel</button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
