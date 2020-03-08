class Pet < ApplicationRecord
    validates :name, :breed, :age, :sex, :size, :about, presence: true

    has_many_attached :photos
end
