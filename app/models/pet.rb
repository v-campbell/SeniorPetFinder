class Pet < ApplicationRecord
    validates :name, :type, :breed, :age, :sex, :size, :about, presence: true
end
