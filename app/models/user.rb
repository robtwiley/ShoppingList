class User < ActiveRecord::Base

  acts_as_authentic
  
  validates_uniqueness_of  :username

end
