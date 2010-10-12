module ApplicationHelper
  
  #helper method to add a link that removes fields from a form
  #see http://media.railscasts.com/videos/197_nested_model_form_part_2.mov
  #name - string displayed in the link (ex. "remove")
  #Calls javascript\application.js remove_fields() function and passes current object
  #  that is part of the form.
  def link_to_remove_fields(name, f) 
    f.hidden_field(:_destroy) + link_to_function(name, "remove_fields(this)")
  end
  
  #helper method to add a link to add fields to a form
  #see http://media.railscasts.com/videos/197_nested_model_form_part_2.mov
  #name - string displayed in the link (ex. "add")
  #Calls javascript\application.js add_fields() function and passes current object
  #  association that is part of the form.
  def link_to_add_fields(name, f, association)
    new_object = f.object.class.reflect_on_association(association).klass.new
    fields = f.fields_for(association, new_object, :child_index => "new_#{association}") do |builder|
		render(association.to_s.singularize + "_fields", :f => builder)
	end
    link_to_function(name, h("add_fields(this, \"#{association}\", \"#{escape_javascript(fields)}\")"))
  end
  
end