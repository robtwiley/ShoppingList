class ListItem < ActiveRecord::Base

	belongs_to :list
	
	#validates_uniqueness_of :list, :list_item

end
