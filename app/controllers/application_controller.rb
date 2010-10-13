class ApplicationController < ActionController::Base
  protect_from_forgery

=begin  
  	#Needed for declarative_authorization and uses config\authorization_rules.rb to determine user's role access rights
	before_filter { |c| Authorization.current_user = c.current_user }

	#Method for declarative_authorization when no authorization to perform a task
	def permission_denied
		redirect_to( root_url, :notice => 'Sorry, you are not allowed to access that page.' )
	end
=end	
	#Usersession methods from authlogic
	helper_method :current_user
  
    def current_user_session  
       logger.debug "ApplicationController::current_user_session" 
       return @current_user_session if defined?(@current_user_session)  
       @current_user_session = UserSession.find  
     end 
 
     def current_user  
       logger.debug "ApplicationController::current_user" 
       return @current_user if defined?(@current_user)  
       ##@current_user = current_user_session && current_user_session.user  
	   @current_user = current_user_session && current_user_session.record
     end 

     def require_user  
       logger.debug "ApplicationController::require_user" 
       unless current_user  
         store_location  
         flash[:notice] = "You must be logged in to access this page" 
         redirect_to new_user_session_url  
         return false 
       end 

      end 

      def require_no_user  
       logger.debug "ApplicationController::require_no_user" 
         if current_user  
         store_location  
         flash[:notice] = "You must be logged out to access this page" 
         redirect_to account_url  
         return false 
         end 
      end 

   def store_location  
       session[:return_to] = request.request_uri  
   end 

   def redirect_back_or_default(default)  
      redirect_to(session[:return_to] || default)  
      session[:return_to] = nil 
   end 

end
