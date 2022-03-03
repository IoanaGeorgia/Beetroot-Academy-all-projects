
function Form(){
    return (
        <div class="theform-container">
        <div class="theform">
          <p>Contact us</p>
          <form>
              <label for="fullname">Full Name</label><br />
              <input type="text" id="fullname" name="fname" placeholder="Ram Kaji" /><br />
              <label for="mail">Your Email Address</label><br />
              <input type="email" id="mail" name="youmail" placeholder="hello@lastdoor.store" /><br />
              <label for="message">Your Message</label><br />
              <textarea id="message" name="yourmessage" rows="3" cols="40" placeholder="Type your message here..."></textarea><br />
          </form>
          <button type="submit">Submit Your Message</button>
       </div>
       </div>

    )
}
export default Form;