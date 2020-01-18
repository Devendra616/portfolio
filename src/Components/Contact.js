import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import $ from 'jquery';

class Contact extends Component {
   
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }
    
    

    function sendEmail(e) {
      e.preventDefault();
      $('#image-loader').fadeIn();

      const SERVICE_ID = `${process.env.REACT_APP_SERVICE_ID}`;
      const TEMPLATE_ID = `${process.env.REACT_APP_TEMPLATE_ID}`;
      const USER_ID = `${process.env.REACT_APP_USER_ID}`;
      
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();
        }, (error) => {
            console.log(error.text);
               $('#image-loader').fadeOut();
               $('#message-warning').html(error.text);
	            $('#message-warning').fadeIn();
        });

        return false;
    }   


    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={sendEmail}  id="contactForm" name="contactForm">
					<fieldset>
               
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="user_name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="user_email" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="user_subject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="8" id="contactMessage" name="message"></textarea>
                  </div>

                  <div>
                  
                  
                  <button className="submit" type="submit">Send</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
                  <h4>Mail Me</h4>
                  <p className="address">
                     {email}
                  </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Posts</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        Few months before I read a small book named “Who Moved My Cheese?”, written by Dr Spencer Johnson.
                        I came to know about it from the good reads of Sandeep Maheshwari’s recommended books.
                        Read further...<a href="https://www.linkedin.com/pulse/who-moved-my-cheese-devendra-singh/" target='_blank' rel="noopener noreferrer">shorturl.at/ckyO0</a>
                        </span>
                        
                     </li>
                     <li>
                        <span>
                        Everyone reading this would surely have provided presentation at least once in their life. We have often attended presentations given by others and 
                        Read further...<a href="https://www.linkedin.com/pulse/how-give-presentation-better-way-devendra-singh/" target='_blank' rel="noopener noreferrer">shorturl.at/bwQS5</a>
                        </span>
                        
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
