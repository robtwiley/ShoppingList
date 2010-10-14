class List < ActiveRecord::Base

	has_many :list_items, :dependent => :destroy
	
	#Displays nested list items if they are not blank
	accepts_nested_attributes_for :list_items, :reject_if => lambda { |a| a[:list_item_name].blank?}, :allow_destroy => true
	
	validates_uniqueness_of :list_name
	
end
