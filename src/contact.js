const renderContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact', 'container')

  contact.innerHTML = `
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <input type="text" class="form-control" id="message">
    </div>
    <button type="submit" class="btn btn-dark">Submit</button>
  </form>`
  return contact;
};
export default renderContact;