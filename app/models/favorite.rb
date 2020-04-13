# class Favorite < ApplicationRecord

#     validates :user_id, :pet_id, presence: true

#     belongs_to :user,
#     class_name: :User,
#     foreign_key: :user_id

#   belongs_to :pet,
#     class_name: :Pet,
#     foreign_key: :pet_id
# end

class Favorite < ApplicationRecord

  validates :user_id, uniqueness: { scope: :pet_id, message: 'Pet already favorited :)' }
  validates :user_id, :pet_id, presence: true
  
  belongs_to :pet

  belongs_to :user

end