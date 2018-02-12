import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {
  termsOfUseTitle: string;
  termsOfUseText: string;
  constructor() {
    this.infoPage();
  }

  ngOnInit() {}
  infoPage() {
    this.termsOfUseTitle = `Terms and Condition`;
    this.termsOfUseText = `
    <div class="aboutus">
<p><span>AGE MATTERS</span></p>
<p>NEPALICRAIG thinks the user to this website are strictly 16+ or else have authorize from their parents to use this website.</p>
<p><span>RESPONSIBILITIES</span></p>
<p>NepaliCraig takes 0% responsibilities on any content provided by the user.</p>
<p>Content posted on NepaliCraig may or may not be true. Poster/user belonged to that Content
is fully responsible for the user on its originality.</p>
<p>For any unusual post reported or fake items, NepaliCraig may take action on behalf
of those accounts. By blocking permanently the IP address, User, Email or by filtering it</p>
<p>NepaliCraig has been introduced among the public for their convenient of searching or day to day life activity.</p>
<p>NepaliCraig may keep User information for future use.</p>
<p><strong>Example</strong>: the user may register and make the account active but does
not use for some years then NepaliCraig keeps authorize to keep user account information
so when they sign in later accounts still remain active</p>
<p>NepaliCraig keeps authorize to truncate any unused/not activated account after 30 days.
When user register for the website and returns to Myhome.aspx page NepaliCraig automatically becomes Active.</p>
<p><span><strong>LAWS AND REGULATION</strong></span></p>
<p>NepaliCraig Strictly Follows law and regulation. If user, person, robots found misleading/unnecessary/ post to the NepaliCraig</p>
<p>Nothing herein shall waive rights or responsibilities that cannot be waived</p>
<p><span><strong>CLAIMS</strong></span></p>
<p>The claims may or not may not be won by the Claimer. It depends upon how the
Claimer/user followed the all the terms and condition of NepaliCraig.</p>
<p>On general note: User can submit feedback, claims on any fraud Content/user
account on NepaliCraig for further investigation. If found rule of responsibilities section will be used.</p>
<p><span>AVOID SCAMS:</span></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Do not make payment to
 anyone you have not met in person or know each other</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Beware offers involving
 shipping -&nbsp;</strong>deal with locals you can meet in person.</p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>NepaliCraig
 Strongly Says&rdquo; <strong>Never wire funds (e.g. Western Union)
 </strong>&nbsp;- anyone who asks you to is a scammer&rdquo;.</p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;User him/herself
is responsible for method of payment made. NepaliCraig takes 0% responsibilities.</strong></p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Transactions are between
 users only</strong>; no third party provides a "guarantee".</p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Never give out financial
 info</strong>&nbsp;(bank account, social security, paypal account, etc).</p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Do not rent or purchase
sight-unseen</strong>&mdash;that amazing "deal" may not exist.</p>
<p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;Do not allow background/credit
 checks</strong>&nbsp;until you have met landlord/employer in person.</p>
     <p>&nbsp;</p>
     <p>&nbsp;</p>
     <p>&nbsp;</p>
<p>Privacy</p>
     <p><strong>Our site use forms to collect contact information (including your name, address, telephone number, and email address)
         so you dont have to enter while returning back later and for the items poster detail.</strong> </p>
 <p><strong>We may use your information to contact you regarding
 the items posted and if any goes against the terms and condition.</strong></p>
 <p><strong>Our Site may use cookies and/or other tracking technologies to identify you so you don't need to log in each time
     you visit or also to identify any unusual use of
     application.You can control the use of cookies, at the individual browser level.</strong> </p>
 <p><strong>We reserve the right to modify this Privacy Policy at any time. If we decide to change our Privacy Policy,
     we will post those changes to this Privacy Policy and any other places we deem appropriate, so that you are
     aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.</strong> </p>
 <p><strong>If we make material changes to this Policy,
 we will notify you here, by email, or by means of a notice on our home page.</strong> </p>
     <p>&nbsp;</p>
        <p>&nbsp;</p>
     <p>&nbsp;</p>
     <p>&nbsp;</p>
 <p><strong>published:01/01/2017<br />
  © nepalicraig.com</strong></p>
</div>
    `;
  }
}
