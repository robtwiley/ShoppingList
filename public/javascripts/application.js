  <!-- Begin
  	//Used to remove fields from a nested form
	//See http://media.railscasts.com/videos/197_nested_model_form_part_2.mov
    function remove_fields (link) {
	  //Sets hidden field for _destroy value to 1 (i.e. true) to indicate to remove fields
	  //when submit button is clicked.
	  $(link).previous("input[type=hidden]").value = "1";
	  //Navigates up DOM tree to first tag with class 'fields' and hides them
	  $(link).up(".fields").hide();
	}
	
	//Used to add fields to a nested form
	//See http://media.railscasts.com/videos/197_nested_model_form_part_2.mov
	function add_fields(link, association, content) {
        var new_id = new Date().getTime();
        var regexp = new RegExp("new_" + association, "g")
        $(link).up().insert({
           before: content.replace(regexp, new_id)
         });
     }
	 
/*  JQuery Versions 	 
	function remove_fields(link) {  
        $(link).prev("input[type=hidden]").val("1");  
        $(link).closest(".fields").hide();  
    }  
      
    function add_fields(link, association, content) {  
        var new_id = new Date().getTime();  
        var regexp = new RegExp("new_" + association, "g");  
        $(link).parent().before(content.replace(regexp, new_id));  
    }  
*/
	function about() {
        confirm("Advertisers, calculations and/or links at this Web site are for general information purposes only.  It is the sole responsibility of any person viewing these pages to verify by outside means the accuracy of the information prior to taking any action based on the content of this web site and any web site linked to it. All of the information provided here, while considered reliable, is not guaranteed by this organization or this organization's agents.  Independent verification is always recommended. When in doubt, consult with the necessary professional.");
		return false;
	}
	
	//Outputs copyright date range.
	//Parameters:  organization - name of organization holding copyright
	//             start_date - original start date of copyright
	function copyDate(organization,start_date) {
	    
		var copyright=new Date();
		var update=copyright.getFullYear();

		//---write copyright
		if ( start_date == update )
		   document.write("<br />Copyright &#169; " + start_date + "<br />" + organization + ",&nbsp;&nbsp;All Rights Reserved.");
		else
		   document.write("<br />Copyright &#169; " + start_date + " - " + update + "<br />" + organization + ",&nbsp;&nbsp;All Rights Reserved.");
		
	} //end copyDate()	
	
	//Outputs line of copyright information on a web page.  To control
	//size, use style sheet reference "bottomlinks"
	function copyRightInfo(organization) {
	
	 	var displaydate;
		var start_date = 2010;
		var copyright=new Date();
		var update=copyright.getYear();
	 
		var Source = new Array();	 
		
		if ( start_date != update )
			displaydate = start_date + "-" + update;
		else
			displaydate = update;
		
		Source[0] = " " + displaydate + " " + organization + "and licensors. All Rights Reserved.";
		
		//Use Source[*] to add other entries.
		//Source[1] = "2002 <a class='bottomlinks' href='http://www.hemera.com' target='_blank'>Hemera Technologies Inc.</a> and its licensors. All Rights Reserved.";
		for ( var i=0; i < Source.length; ++i ) {
			document.write( "<br />Some images on this site are " );
			document.write( "Copyright ©  " + Source[i] );
			document.write( "<br /><br />");
			document.write( "*****" );
		}
	    
	 }   // end copyRightInfo()
	 
	  function writeBottom(isW3CValid) {

        //document.write("<table cellspacing='0' cellpadding='0'>");
        writeWebMaster();
		//document.write("</table>");
		
		if (isW3CValid != "No")
		   writeW3CLogoTransitional();
		   
	} //end writeBottom()
	
	   function writeWebMaster() {
         
      //document.write("<tr><td><hr /></td></tr>");
      document.write("<tr><td class='bottom'>Webmaster:&nbsp; Robert Wiley II<br />");
	  document.write("Email: <a class='bottomlinks' href='mailto:robtwiley@cox.net'"); 
	  document.write(" alt='E-mail the webmaster' title='E-mail the webmaster'>");
	  document.write("robtwiley@cox.net</a><br />");
	  copyDate("Robert Wiley II","2010");
	  document.write("<br />");
	  document.write("<a class='bottomlinks' href='#top' title='Read the Site Disclaimer'"); 
	  document.write(" onClick='about();'>Site Disclaimer</a></td></tr>");
	  document.write("<tr><td class='bottom'><br /><a class='bottomlinks' href='#top' ");
	  //document.write("onClick='showBrowserInfo();' title='Display Browser Info'>");
	  document.write("Display Current Browser Information</a></td></tr>");
	  
    } //end writeWebMaster()
	
  
	
    //End --> 
	
	
